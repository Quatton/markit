import { inject } from "@vercel/analytics";
export default defineNuxtPlugin((_) => {
  inject();
});
