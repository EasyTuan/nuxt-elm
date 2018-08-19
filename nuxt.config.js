module.exports = {
  head: {
    title: 'nuxt-elm',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-tap-highlight', content: 'no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  loading: { color: '#3B8070' },

  build: {
    filenames: {
      manifest: `manifest.[hash]${new Date().getTime()}.js`,
      vendor: `vendor.[hash]${new Date().getTime()}.js`,
      app: `app.[chunkhash]${new Date().getTime()}.js`
    },
    vendor: ['axios', 'mint-ui'],
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

  plugins: [
    { src: '~plugins/mint-ui' },
    { src: '~assets/styles/base.scss' },
  ],
}

