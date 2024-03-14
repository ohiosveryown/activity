// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // global styles
  css: [
    "~/public/assets/style/reset.scss",
    "~/public/assets/style/type.scss",
    "~/public/assets/style/util.scss",
  ],

  modules: ["@nuxt/image"],
})
