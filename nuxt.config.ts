import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  compatibilityDate: '2025-02-28',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: `${process.env.SITE_NAME} | ${process.env.SITE_ROLE}`, // Dynamic config from .env
      meta: [
        { name: 'description', content: "Muhammadxoja's portfolio showcasing projects, skills, and contact information. Built with Nuxt.js and Tailwind CSS." },
        { name: 'keywords', content: 'Muhammadxoja, portfolio, web developer, frontend, backend, Nuxt.js, Tailwind CSS, projects, parallax, animations' },
        { name: 'author', content: 'Muhammadxoja' },
        { property: 'og:title', content: 'Muhammadxoja | Portfolio' },
        { property: 'og:description', content: "Explore Muhammadxoja's projects and skills in web development." },
        { property: 'og:image', content: '/images/demo-share.png' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:url', content: 'https://muhammadxoja.netlify.app/' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Muhammadxoja | Portfolio' },
        { name: 'twitter:description', content: "Explore Muhammadxoja's projects and skills in web development." },
        { name: 'twitter:image', content: '/images/demo-share.png' },
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
    cssPath: '~/assets/css/tailwind.css',  // Tailwind CSS fayl yo'li
    configPath: 'tailwind.config.js',      // Tailwind konfiguratsiyasi yo'li
    exposeConfig: true,
    injectPosition: 0,
    viewer: false,  // Tailwind CSS Viewer-ni o'chirish
  },

  runtimeConfig: {
    apiSecret: process.env.API_SECRET, // Maxfiy API kalitini o'qish
    public: {
      apiBase: '/api', 
    },
  },

  // Custom Environment Variables (Example)
  privateConfig: {
    siteName: process.env.SITE_NAME || 'Default Site Name',
    siteRole: process.env.SITE_ROLE || 'Developer',
  },
})
