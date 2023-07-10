<script setup lang="ts">
  const isOpen = ref(false);

  const props = defineProps({
    showSponsorFormFirst: {
      type: Boolean,
      default: true,
    },
  });
</script>

<template>
  <UModal v-model="isOpen" :ui="{ width: 'sm:max-w-6xl' }">
    <DemoIntegrated :show-sponsor-form-first="props.showSponsorFormFirst" />
  </UModal>
  <UButton v-bind="$attrs" size="xl" @click="isOpen = true">
    View Demo
  </UButton>
</template>
