# 前言

高仿饿了么，以nuxt作为vue的服务端渲染，适合刚接触或者准备上vue ssr的同学参考和学习

如遇网络不佳，请移步[国内镜像加速节点](https://gitee.com/easytuan/nuxt-elm)

# 效果演示

[查看demo请戳这里](http://47.100.122.91:3000/)（请用chrome手机模式预览）

### 移动端扫描下方二维码

<img src="./screenshots/qr-code.png" width="250" height="250"/>

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

```

## 补充

此项目有配套的后台系统，如果想体验前后台同时开发，可以下载对应的后台系统：[后台项目传送地址](https://github.com/EasyTuan/node-elm-api)。

如果只做前端开发，请忽略这句话。


### 1.2 开发过程

#### 1.2.1 命令

```sh
# 开发
npm run dev

# 发布
npm run build
```

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

# 捐助

如有帮助，欢迎打赏

<img src="screenshots/wechat.jpg" width="200px" /> <img src="screenshots/alipay.jpg" width="200px" />

# 友情链接

[该项目后台项目](https://github.com/EasyTuan/node-elm-api)

# License

[GPL](LICENSE)
