export default {
  IS_RELEASE: false, // true线上，false测试

  BASE_URL: 'http://localhost:3000/api', // 测试

  // BASE_URL: '//elm.caibowen.net/api', // 生产

  // IMG_URL: 'http://localhost:9000/', // 测试

  IMG_URL: 'https://easytuan.gitee.io/node-elm-api/public/', // 生产（使用码云Gitee Pages 服务）

  HEADERS: {
    'Content-Type': 'application/json;charset=UTF-8'
  },

  TIMEOUT: 12000, // api超时时间

};
