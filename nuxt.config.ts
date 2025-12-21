// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Somkidvittaya School',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/SVLogoSocial-1.svg' }
      ],
      meta: [
        { name: 'theme-color', content: '#0d8abc' }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["./app/main.css"],
})
