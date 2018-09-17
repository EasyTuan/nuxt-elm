# 前言

高仿饿了么，以nuxt作为vue的服务端渲染，适合刚接触或者准备上vue ssr的同学参考和学习

如遇网络不佳，请移步[国内镜像加速节点](https://gitee.com/easytuan/nuxt-elm)

# 效果演示

[查看demo请戳这里](https://elm.caibowen.net/)（请用chrome手机模式预览）

### 移动端扫描下方二维码

<img src="./screenshots/qr-code.png" width="250" height="250"/>

# API接口文档

[接口文档地址](https://easytuan.gitee.io/node-elm-api/doc)（基于apidoc）

# 技术栈

vue2 + vuex + vue-router + mint-ui + nuxt

## 项目运行

```

git clone git@github.com:EasyTuan/nuxt-elm.git

# 国内镜像加速节点:git@gitee.com:easytuan/node-elm-api.git

cd nuxt-elm

npm install

npm run dev

#模版快速生成
npm run tep `文件名`

# pm2部署
npm run start

```

## 补充

此项目有配套的后台系统，如果想体验前后台同时开发，可以下载对应的后台系统：[后台项目传送地址](https://github.com/EasyTuan/node-elm-api)。

如果只做前端开发，请忽略这句话。


# 目标功能
- [x] 商家列表 -- 完成
- [x] 购物车功能 -- 完成
- [x] 餐馆食品列表页 -- 完成
- [x] 店铺评价页面 -- 完成
- [x] 商家详情页 -- 完成
- [x] 登录、注册 -- 完成
- [x] 修改密码 -- 完成
- [x] 个人中心 -- 完成
- [x] 红包 -- 完成
- [x] 收货地址 -- 完成

# 业务介绍

目录结构

    ├── assets               // 静态资源
    │   ├── images                // 图片资源
    │   ├── services              // api请求
    │   ├── styles                // 样式文件
    │   └── utils                 // 常用工具类
    ├── components           // 组件
    ├── config
    │   └── index.js              // 配置文件
    ├── layouts              // 布局
    ├── middleware           // 中间件
    ├── pages                // 页面
    ├── plugins              // 插件
    ├── static               // 静态资源
    └── store                //vuex状态树


## 部分截图展示

### 首页展示

<img src="screenshots/1.png" width="375px" height="667px" /> <img src="screenshots/1.gif" width="375px" height="667px" />

### 个人资料

<img src="screenshots/2.png" width="375px" height="667px" /> <img src="screenshots/2.gif" width="375px" height="667px" />

### 我的

<img src="screenshots/3.png" width="375px" height="667px" /> <img src="screenshots/3.gif" width="375px" height="667px" />

### 订餐

<img src="screenshots/4.png" width="375px" height="667px" /> <img src="screenshots/4.gif" width="375px" height="667px" />

### 商家评价

<img src="screenshots/5.png" width="375px" height="667px" /> <img src="screenshots/5.gif" width="375px" height="667px" />

# 说明

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍

# 开发日常记录

### nuxt模版搭建

这里关于项目初始化，我是直接使用的 `Nuxt` 官网提供的 starter 模板

```shell

# 安装 vue-cli
npm install -g vue-cli

# 初始化项目
vue init nuxt-community/starter-template nuxt-ssr-demo

# 安装依赖
cd nuxt-ssr-demo
npm install

# 启动本地服务
npm run dev

```

访问 http://localhost:3000 ，现在我们来看下初始化好的项目目录

```shell

├── assets                      // 静态资源
├── components                  // 全局组件
├── layouts                     // 页面布局
├── middleware                  // 中间件
├── pages                       // 路由页面
├── static                      // 静态资源，打包文件名不会被hash
├── store                       // vuex
├── nuxt.config.js              // nuxt配置文件
├── package.json
├── README.md

```

注意：nuxt默认会读取pages里面的vue文件，自动生成路由，如需要自定义路由，可在nuxt.config.js中配置对应参数。

### request请求封装

数据和展示层的剥离是有必要的，这也是为什么前端都提倡MV*的设计模式，而对request请求封装是我们第一步要完成的。这里我选了axios作为HTTP请求客户端，axios兼容浏览器端和node端，同时提供了请求拦截、响应拦截等让我们开发更加愉快的功能。

在 `config/index.js` 中写入：

```

const json = require('../package.json');
const port = json.config.nuxt.port;

module.exports = {
  IS_RELEASE: true, // true线上，false测试

  BASE_URL: `http://localhost:${port}/api`, // 测试

  // BASE_URL: `https://elm.caibowen.net/api`, // 生产

  // IMG_URL: 'http://localhost:9000/', // 测试

  IMG_URL: 'https://easytuan.gitee.io/node-elm-api/public/', // 生产（使用码云Gitee Pages 服务）

  HEADERS: {
    'Content-Type': 'application/json;charset=UTF-8'
  },

  TIMEOUT: 12000, // api超时时间

};

```

在 `assets/utils/request.js` 中写入：

```

import axios from 'axios';
import config from '~/config';
import { Toast } from 'mint-ui';

axios.defaults.baseURL = config.BASE_URL;
axios.defaults.timeout = config.TIMEOUT;
axios.defaults.headers = config.HEADERS;

// 请求拦截器
axios.interceptors.request.use( request => {
  if (!config.IS_RELEASE) {
    console.log(
      `${new Date().toLocaleString()}【 M=${request.url} 】P=`,
      request.params || request.data,
    );
  }
  return request;
}, error => {
  return Promise.reject(error);
});

export default async (options = { method: 'GET' }) => {
  let isdata = true;
  if (
    options.method.toUpperCase() !== 'POST'
    && options.method.toUpperCase() !== 'PUT'
    && options.method.toUpperCase() !== 'PATCH'
  ) {
    isdata = false;
  }
  const res = await axios({
    method: options.method,
    url: options.url,
    data: isdata ? options.data : null,
    params: !isdata ? options.data : null,
  });
  if (res.status >= 200 && res.status < 300) {
    if (!config.IS_RELEASE) {
      console.log(
        `${new Date().toLocaleString()}【接口响应：】`,
        res.data,
      );
    }
    // 浏览器环境弹出报错信息
    if(typeof window !== "undefined" && res.data.code !== 0) {
      Toast(res.data.msg);
    }
    return res.data;
  }else {
    if(typeof window !== "undefined" && res.data.code !== 0) {
      Toast('请求错误');
    }
  }

};

```

最后所有api请求都写进server.js文件，方便统一管理。

### 跨域处理

使用过 `vue` 的同学，肯定知道对于项目中的跨域，`vue-cli` 对 `webpack` 中的 `proxy` 选项进行了一层封装。它暴露出来的是一个叫 `proxyTable` 的选项，是对 `webpack` 中的 `proxy` 和其三方插件 `http-proxy-middleware` 的一个整合。

不幸的 `Nuxt` 中没有 `proxyTable` 这么一个配置项来进行跨域的配置。当然幸运的是，在 `Nuxt` 中你可以直接通过配置 `http-proxy-middleware`  来处理跨域。更幸运的是 `Nuxt` 官方提供了两个包来处理 `axios` 跨域问题。

- [@nuxtjs/axios](https://www.npmjs.com/package/@nuxtjs/axios)
- [@nuxtjs/proxy](https://www.npmjs.com/package/@nuxtjs/proxy)

首先，进行安装

```shell
npm i @nuxtjs/axios @nuxtjs/proxy -D
```

然后在 `nuxt.config.js` 文件里进行配置

```
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    [
      '/api',{
        // target: 'http://localhost:9000',
        target: 'https://elm-api.caibowen.net',
        changeOrigin: true,
        pathRewrite: { '^/api' : '/' }
      }
    ]
  ],
```

然后你就可以安心使用你的 axios 进行跨域请求了

### 项目部署

到这一步的同学，你得先确保你拥有一个自己的服务器。如果没有的话，赶紧去买一个（我不会和你说AWS和google云有提供免费一年的云服务器试用）


OK，文章继续。在进行部署讲解前，我们先看一下 `Nuxt` 提供的几个命令

| 命令            | 描述                                       |
| ------------- | ---------------------------------------- |
| nuxt          | 启动一个热加载的 Web 服务器（开发模式） [localhost:3000](http://localhost:3000/) |
| nuxt build    | 利用 webpack 编译应用，压缩 JS 和 CSS 资源（发布用）      |
| nuxt start    | 以生成模式启动一个 Web 服务器 (`nuxt build` 会先被执行)   |
| nuxt generate | 编译应用，并依据路由配置生成对应的 HTML 文件 (用于静态站点的部署)    |


#### 开始部署


上传代码到服务器，然后执行命令nuxt build && nuxt start 监听3000端口。
接下来，开始配置你的 nginx （用于端口转发）

```
 server {
  # 端口，http为 80，如果部署了https请监听 443
  listen 80;
  # 域名
  server_name elm.caibowen.net;
  # 反向代理
  location / {
    proxy_pass http://localhost:3000;
  }
}
```

然后重启 nginx

```
nginx -s restart
```

然后你就能在 http://elm.caibowen.net 访问到你的网站啦


### 最后

对于 `Nuxt`，在使用层面，是比较简单、好上手的。相对 vue-ssr 来说，它大大的简化了开发的配置，让开发人员可以只需思考业务的开发，而不用太去担心文件的配置。其中 `Nuxt` 通过监听 pages 目录文件变更并自动生成路由更是直接省去了我们平常对于路由的配置。

但是，目前 `Nuxt` 整体还是有待提高的，目前社区相关的三方插件比较有限，市面上相关的参考资料也相对比较少。

不管如何，希望 `Nuxt` 社区可以越来越好吧 ~

# 捐助

如有帮助，欢迎打赏

<img src="screenshots/wechat.jpg" width="200px" /> <img src="screenshots/alipay.jpg" width="200px" />

# 友情链接

[项目后台地址](https://github.com/EasyTuan/node-elm-api)

# License

[GPL](LICENSE)
