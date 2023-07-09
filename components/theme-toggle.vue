<script setup>
  const colormode = useColorMode();

  const toggleColormode = () => {
    colormode.preference = colormode.preference === "light" ? "dark" : "light";
  };
</script>

<template>
  <ClientOnly>
    <UButton
      size="sm"
      color="primary"
      square
      :icon="
        colormode.value === 'light' ? 'i-heroicons-moon' : 'i-heroicons-sun'
      "
      variant="ghost"
      @click="toggleColormode"
    />
  </ClientOnly>
</template>
