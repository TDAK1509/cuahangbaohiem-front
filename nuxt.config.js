export default {
  target: "static",

  head: {
    title: "cuahangbaohiem-front",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap"
      }
    ],
    script: [
      {
        src: "https://use.fontawesome.com/releases/v5.14.0/js/all.js",
        defer: true
      }
    ]
  },

  css: ["@/assets/scss/main.scss"],

  plugins: [],

  components: true,

  buildModules: ["@nuxt/typescript-build", "@nuxtjs/dotenv"],

  modules: [],

  router: {
    linkActiveClass: "is-active"
  },

  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  },

  generate: {
    exclude: [/\/xe\/tinh-phi-test/]
  }
};
