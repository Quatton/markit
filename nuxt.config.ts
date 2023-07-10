// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["nuxt-seo-kit"],

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
    notionSponsorDatabaseId: "",
    notionJoinDatabaseId: "",
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL ||
        `https://${process.env.VERCEL_URL}` ||
        "http://localhost:3000",
      siteName: "Markit",
      siteDescription:
        "Markit is an interactive roadmap for technical solopreneurs to validate ideas and build a marketing strategy from pre-sale to post-launch.",
      language: "en-US",
    },
  },

  eslint: {
    useEslintrc: true,
  },

  plugins: ["plugins/vercel.ts"],
});
