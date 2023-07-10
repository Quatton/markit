<script setup lang="ts">
  const isOpen = ref(false);

  const props = defineProps({
    showSponsorFormFirst: {
      type: Boolean,
      default: true,
    },
  });

  const showSponsorForm = ref(props.showSponsorFormFirst);
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
      <div class="p-8 space-y-2">
        <div class="flex justify-center">
          <UButtonGroup>
            <UButton
              size="lg"
              :color="showSponsorForm ? 'primary' : 'gray'"
              label="Sponsor"
              @click="
                () => {
                  showSponsorForm = true;
                }
              "
            />
            <UButton
              size="lg"
              :color="showSponsorForm ? 'gray' : 'primary'"
              label="Join"
              @click="
                () => {
                  showSponsorForm = false;
                }
              "
            />
          </UButtonGroup>
        </div>
        <Suspense>
          <LazyFormSponsor
            v-if="showSponsorForm"
            :close="
              () => {
                isOpen = false;
              }
            "
          />
          <LazyFormJoin
            v-else
            :close="
              () => {
                isOpen = false;
              }
            "
          />
          <template #fallback>
            <USkeleton />
          </template>
        </Suspense>
      </div>
    </div>
  </UModal>
  <UButton v-bind="$attrs" size="xl" @click="isOpen = true">
    View Demo
  </UButton>
</template>
