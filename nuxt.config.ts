// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxthq/ui", "nuxt-vitest", "@nuxtjs/eslint-module"],

  runtimeConfig: {
    notionSecret: "",
    notionDatabaseId: "",
  },

  eslint: {
    useEslintrc: true,
  },
});
