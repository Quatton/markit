<template>
  <section
    class="py-10 px-4 prose dark:prose-invert bg-[rgb(var(--background))]"
  >
    <h1>Quatton's Nuxt.js Template</h1>
    <h2>Minimal But Opinionated</h2>
    <ul>
      <li>NuxtLabs UI (Tailwind CSS + Nuxt Colormode)</li>
      <li>ESLint with recommended settings</li>
      <li>Vitest for testing</li>
    </ul>
    <h2>Calling API endpoints</h2>
    <ClientOnly>
      <LazyExampleApiCall />
    </ClientOnly>
  </section>
</template>

<script setup></script>

<style></style>
