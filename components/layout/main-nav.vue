<script setup>
  const { socials } = useAppConfig();

  const links = [
    {
      name: "Quick Demo",
      path: "#demo",
    },
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
  <nav class="flex gap-1">
    <UButton
      v-for="link in links"
      :key="link.name"
      :to="link.path"
      variant="ghost"
      color="gray"
    >
      {{ link.name }}
    </UButton>

    <UButton
      :to="socials.github"
      icon="i-fa-brands-github"
      target="_blank"
      rel="noopener noreferrer"
      variant="ghost"
      size="sm"
      square
    />

    <UButton
      :to="socials.twitter"
      icon="i-fa-brands-twitter"
      target="_blank"
      variant="ghost"
      size="sm"
      square
    />

    <ThemeToggle />
  </nav>
</template>
<style></style>
