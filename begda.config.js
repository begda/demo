const pkg = require('./package')
module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: '黔西南安全云',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=yes' }, // 调用电话功能
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      // {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      // {src: '/node_modules/jquery/dist/jquery.min.js'}
    ]
  },
  transition: {
    name: 'page'
    // mode: 'out-in'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffd001' },

  router: {
    base: '/mobile/', // 定义所有路由前缀
    linkActiveClass: 'active-link',
    middleware: 'mobile'
  },

  generate: {
    dir: 'dist/mobile/' // 输出静态文件到目录
    // routes: [
    //   // '/abc'
    // ]
  },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    // 'iview/dist/styles/iview.css',
    // 'vant-tianliaohui3/lib/vant-css/index.css',
    'vant/lib/index.css',
    // '~/assets/main.css',
    '~/static/font/iconfont.css',
    '~/static/css.css'

  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/init', ssr: false },
    { src: '~store/index', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  proxy: [
    // ['/Safety', { target: 'http://www.qxnaqy.com' }],
    // ['/Base', { target: 'http://www.qxnaqy.com' }],
    // ['/platform', { target: 'http://eap.qxnaqy.com' }]

  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'element-ui',
      'iview',
      'vant',
      'axios',
      '~/plugins/http'
    ],

    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {

    }
  }
}
