// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxthq/ui",
    "@nuxt/image",
    "nuxt-vitest",
    "@nuxtjs/eslint-module",
  ],

  ui: {
    icons: ["fa-brands", "skill-icons"],
  },

  runtimeConfig: {
    notionSecret: "",
    notionDatabaseId: "",
  },

  eslint: {
    useEslintrc: true,
  },

  plugins: [{ src: "./plugins/vercel.ts", mode: "client" }],
});
