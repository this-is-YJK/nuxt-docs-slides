export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Documentation Slides',
      meta: [
        { name: 'description', content: 'Beautiful documentation slides with Nuxt.js and stunning transitions' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css' }
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js',
          async: true,
          defer: true
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/matlab.min.js',
          async: true,
          defer: true
        }
      ]
    }
  },

  css: [
    '~/assets/css/main.css',
    '~/assets/css/animations.css'
  ],

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  tailwindcss: {
    exposeConfig: true,
    viewer: true
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml']
    }
  }
})
