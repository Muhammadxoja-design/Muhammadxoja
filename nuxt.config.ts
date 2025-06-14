const config = require('./developer.json')
const siteTitle = `${config.name} | ${config.role}`


/*
 * Nuxt 3 Config File
 Usage: https://nuxt.com/docs/api/configuration/nuxt-config
 */
// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Muhammadxoja | Frontend Developer',
      meta: [
        { name: 'description', content: 'Muhammadxoja Kimyonazarov - Frontend, PHP, va Creative Web Developer.' },
        { name: 'keywords', content: 'Muhammadxoja, Kimyonazarov, Frontend Developer, Portfolio, Uzbekistan, Web Developer' },
        { name: 'author', content: 'Muhammadxoja Kimyonazarov' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Muhammadxoja | Frontend Developer' },
        { property: 'og:description', content: 'Creative web developer portfolio by Muhammadxoja Kimyonazarov.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://muhammadxoja.netlify.app' },
        { property: 'og:image', content: '/favicon.ico' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Muhammadxoja | Frontend Developer' },
        { name: 'twitter:description', content: 'Creative web developer portfolio by Muhammadxoja Kimyonazarov.' },
        { name: 'twitter:image', content: '/favicon.ico' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  css: ['@/assets/css/tailwind.css']
})
