<script setup>
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
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
