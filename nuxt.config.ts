// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // global styles
  css: [
    "~/public/style/reset.scss",
    "~/public/style/type.scss",
    "~/public/style/util.scss",
  ],

  modules: ["@nuxt/image"],
})
