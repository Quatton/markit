<script setup>
  const isOpen = ref(false);
</script>

<template>
  <UModal v-model="isOpen" :ui="{ width: 'sm:max-w-6xl' }">
    <div>
      <UButton
        class="absolute top-4 right-4"
        size="sm"
        icon="i-heroicons-x-mark"
        square
        @click="isOpen = false"
      />
    </div>
    <div class="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
      <Suspense>
        <LazyDemoQuick />
        <template #fallback>
          <USkeleton />
        </template>
      </Suspense>
      <LazyFormSponsor
        :close="
          () => {
            isOpen = false;
          }
        "
      />
    </div>
  </UModal>
  <UButton v-bind="$attrs" size="xl" @click="isOpen = true">
    What does it look like?
  </UButton>
</template>
