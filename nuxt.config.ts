export default defineNuxtConfig({
  compatibilityDate: '2024-09-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Ahmed Yousry — Frontend Developer (Vue.js / Nuxt.js)',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Ahmed Yousry — Frontend Developer with 4+ years of experience building scalable, high-performance web apps with Vue.js and Nuxt.js. SEO, performance and seamless API integration.',
        },
        { name: 'theme-color', content: '#07070a' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Ahmed Yousry — Frontend Developer' },
        {
          property: 'og:description',
          content: 'Vue.js & Nuxt.js specialist crafting fast, beautiful and SEO-friendly web experiences.',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300..800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap',
        },
      ],
    },
  },
})
