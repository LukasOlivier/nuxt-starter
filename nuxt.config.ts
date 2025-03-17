// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: ["@nuxtjs/seo", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxt/eslint"],

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: {
    families: [
        { name: 'Space Grotesk', preload: true, display: 'swap' },
        { name: 'Poppins', preload: true, display: 'swap' },
    ],
    providers: {
        google: false, // Disable Google Fonts for GDPR compliance
    },
  },

  image: {
    quality: 80,
  },

  site: { url: 'https://example.com', name: 'My Awesome Website' },
});
