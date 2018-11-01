const express = require('express')
const consola = require('consola')
const proxy = require('express-http-proxy')
const { Nuxt, Builder } = require('nuxt')

// const PROXY_URL = 'http://localhost:9000'; // 反向代理域名，测试
const PROXY_URL = 'http://elm-api.caibowen.net'; // 反向代理域名，生产

const app = express()
const port = process.env.PORT || 3000

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

app.use('/api', proxy(PROXY_URL));

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port)
  consola.ready({
    message: `Server listening on http://localhost:${port}`,
    badge: true
  })
}
start()
