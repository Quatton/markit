// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxthq/ui",
    "@nuxt/image",
    "nuxt-vitest",
    "@nuxtjs/eslint-module",
    "nuxt-og-image",
  ],

  ui: {
    icons: ["fa-brands", "skill-icons"],
  },

  runtimeConfig: {
    notionSecret: "",
    notionDatabaseId: "",
    notionJoinDatabaseId: "",
  },

  eslint: {
    useEslintrc: true,
  },

  plugins: ["/c:/Users/Atom/Documents/GitHub/markit/plugins/vercel.ts"],
});
