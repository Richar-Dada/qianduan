module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '前端-收集前端优秀文章',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '前端,Vue.js,Vue,微信小程序,Angular,Kotlin,RxJava,React Native,Wireshark,敏捷开发,Bootstrap,OKHttp,正则表达式,WebGL,Webpack,Docker,MVVM' },
      { hid: 'description', name: 'description', content: '前端-专门收集前端优秀文章的网站，涵盖前端MVVM,NodeJS,webpack构建,计算机网络等各个方面' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.css',
    'element-ui/lib/theme-chalk/index.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css',
    'mavon-editor/dist/css/index.css',
    'highlight.js/styles/atom-one-light.css'
    ],
    
  /*
  ** Add axios globally
  */
  plugins:[
    '@/plugins/element-ui',
    { src: '~plugins/nuxt-quill-plugin.js', ssr: false },
    { src: '~plugins/md-editor.js', ssr: false }
  ],
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
