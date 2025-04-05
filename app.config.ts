// app.config.ts
import { defineAppConfig } from 'nuxt3'

export default defineAppConfig({
  title: process.env.NUXT_TITLE || 'Default Title',  // .env faylidan olish
  blog: {
    enabled: true,
  },
  theme: {
    dark: true,
    colors: {
      primary: process.env.NUXT_PRIMARY_COLOR || '#ff0000',  // .env faylidan olish
    },
  },
})
