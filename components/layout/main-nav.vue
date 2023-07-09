<script setup>
  const links = [
    {
      name: "Motivation",
      path: "#motivation",
    },
    {
      name: "Features",
      path: "#features",
    },
    {
      name: "Pricing",
      path: "#pricing",
    },
  ];
</script>

<template>
  <nav class="flex gap-2">
    <UButton
      v-for="link in links"
      :key="link.name"
      :to="link.path"
      variant="ghost"
      color="gray"
    >
      {{ link.name }}
    </UButton>

    <LazyThemeToggle />
  </nav>
</template>
<style></style>
