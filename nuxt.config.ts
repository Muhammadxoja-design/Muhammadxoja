const config = require('./developer.json')
const siteTitle = `${config.name} | ${config.role}`


export default defineNuxtConfig({
  compatibilityDate: '2025-02-28',
  devtools: { enabled: true },
  
  app: {
    head: {
      htmlAttrs: {
        lang: 'en', 
      },
      title: siteTitle, 
      meta: [
        { name: 'description', content: "Muhammadxoja's portfolio showcasing projects, skills, and contact information. Built with Nuxt.js and Tailwind CSS." },
        { name: 'keywords', content: 'Muhammadxoja, portfolio, web developer, frontend, backend, Nuxt.js, Tailwind CSS, projects, parallax, animations' },
        { name: 'author', content: 'Muhammadxoja' },
        { property: 'og:title', content: 'Muhammadxoja | Portfolio' },
        { property: 'og:description', content: "Explore Muhammadxoja's projects and skills in web development." },
        { property: 'og:image', content: '/images/demo-share.png' },
        { property: 'og:type', content: 'website' },
        // ...
      ],
      link: [
        { rel: 'manifest', href: 'pwa/manifest.json' },
        { rel: 'apple-touch-icon', href: 'pwa/icons/apple-touch-icon.png' },
      ],
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  components: {
    dirs: [
      '~/components',
    ],
  },

  tailwindcss: {
    cssPath: '~/assets/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: true,
    injectPosition: 0,
    viewer: false,
  },

  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: '/api',

    }
  }
})
