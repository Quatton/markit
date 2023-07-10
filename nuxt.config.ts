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
    notionSponsorDatabaseId: "",
    notionJoinDatabaseId: "",
  },

  eslint: {
    useEslintrc: true,
  },

  plugins: ["plugins/vercel.ts"],
});
