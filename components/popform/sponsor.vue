<script setup>
  const isOpen = ref(false);
</script>

<template>
  <UModal v-model="isOpen">
    <ClientOnly>
      <LazyFormSponsor
        :close="
          () => {
            isOpen.value = false;
          }
        "
      />
    </ClientOnly>
  </UModal>
  <UButton v-bind="$attrs" size="lg" @click="isOpen = true">
    I'm interested
  </UButton>
</template>
