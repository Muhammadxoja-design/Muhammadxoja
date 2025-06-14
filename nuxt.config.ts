const config = require('./developer.json')
const siteTitle = `${config.name} | ${config.role}`


export default defineNuxtConfig({
 hub: {
    project: 'muhammadxoja-3b9m' 
  },
  compatibilityDate: '2025-02-28',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en', // App language
      },
      title: siteTitle, // App window nav title
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A awesome developer portfolio design.' },
        { hid: 'og:title', property: 'og:title', content: siteTitle },
        { hid: 'og:description', property: 'og:description', content: 'A awesome developer portfolio design.' },
        { hid: 'og:image', property: 'og:image', content: 'demo-share.jpg' },
        { hid: 'og:url', property: 'og:url', content: 'https://developer-portfolio-v1.netlify.app/' },
        { name: 'theme-color', content: '#010C15' },
        // ...
      ],
      link: [
        { rel: 'manifest', href: 'pwa/manifest.json' },
        { rel: 'apple-touch-icon', href: 'pwa/icons/apple-touch-icon.png' },
      ],
    },
  },

  modules: ['@nuxtjs/tailwindcss'],

  components: {
    dirs: [
      '~/components',
    ],
  },
  
  tailwindcss: {
    cssPath: '~/assets/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: true, 
    viewer: false,
  },

  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: '/api',

    }
  }
})
