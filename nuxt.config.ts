// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // global styles
  css: [
    "~/assets/style/reset.scss",
    "~/assets/style/type.scss",
    "~/assets/style/util.scss",
  ],

  modules: ["@nuxt/image"],

  image: {
    imagekit: {
      baseURL: "https://ik.imagekit.io/ohiosveryown/",
    },
  },
})
