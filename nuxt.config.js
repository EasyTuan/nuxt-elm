module.exports = {
  head: {
    title: '饿了么',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-tap-highlight', content: 'no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
    ],
    link: [
      { rel: 'SHORTCUT ICON', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'http://g.tbcdn.cn/mtb/lib-flexible/0.2.3/??flexible_css.js,flexible.js' },
    ],
  },

  loading: { color: '#3B8070' },

  cache: true,

  build: {
    filenames: {
      manifest: `manifest.[hash]${new Date().getTime()}.js`,
      vendor: `vendor.[hash]${new Date().getTime()}.js`,
      app: `app.[chunkhash]${new Date().getTime()}.js`
    },
    vendor: ['axios', 'mint-ui', 'js-cookie'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    [
      '/api',{
        // target: 'http://localhost:9000',
        target: 'http://elm-api.caibowen.net',
        changeOrigin: true,
        pathRewrite: { '^/api' : '/' }
      }
    ]
  ],

  plugins: [
    { src: '~plugins/mint-ui' },
    { src: '~assets/styles/base.scss' },
  ],
}

