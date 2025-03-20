// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils'
  ],
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
      gitInfo: {
        name: 'nuxt3-styled-tailwind-nuxt-studio',
        owner: 'rafaelmils',
        url: 'https://github.com/rafaelmils/nuxt3-styled-tailwind-nuxt-studio'
      }
    }
  }
})