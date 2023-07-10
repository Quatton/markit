<script setup>
  const currentStep = ref(1);
  const steps = ref([
    {
      number: 1,
      label: "Pre-Sale",
    },
    {
      number: 2,
      label: "Development",
    },
    {
      number: 3,
      label: "Launch",
    },
  ]);
</script>

<template>
  <div>
    <div class="flex my-12 h-fit items-center justify-around relative">
      <div :class="cn(['h-1 bg-gray-300 absolute left-0 right-0'])" />
      <div
        :class="
          cn([
            'h-1 bg-primary-600 absolute left-0',
            currentStep === 1 && 'w-1/6',
            currentStep === 2 && 'w-1/2',
            currentStep === 3 && 'w-5/6',
          ])
        "
      />
      <CircleStep
        v-for="step in steps"
        :key="step.number"
        :is-current-step="step.number === currentStep"
        :number="step.number"
        :label="step.label"
      />
    </div>
    <div class="p-8 prose dark:prose-invert">
      <h2>Let's start with creating a landing page for early bird deals!</h2>
      <p>Try out these recommended tools!</p>
      <div class="flex gap-4">
        <p class="flex-1 text-sm text-muted-foreground">
          Drag & Drop Website Builder
        </p>
        <p class="flex-1 text-sm text-muted-foreground">
          Payment & Subscription Done Easy
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4 auto-rows-min">
        <UButton
          size="xl"
          color="gray"
          to="https://webflow.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LazyLogoWebflow />

          <template #trailing>
            <UIcon name="i-heroicons-arrow-up-right" class="ml-auto" />
          </template>
        </UButton>
        <UButton
          size="xl"
          color="gray"
          to="https://www.lemonsqueezy.com"
          target="_blank"
          rel="noopener noreferrer"
          class="no-underline"
        >
          <template #leading>
            <LogoLemonsqueezy />
          </template>
          Lemon Squeezy
          <template #trailing>
            <UIcon name="i-heroicons-arrow-up-right" class="ml-auto" />
          </template>
        </UButton>
      </div>
      <p>Sponsored</p>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
        <UButton
          v-for="(_, index) in 4"
          :key="index"
          size="xl"
          :label="`Your Product #${index + 1}`"
          color="gray"
        >
          <template #trailing>
            <UIcon name="i-heroicons-arrow-up-right" class="ml-auto" />
          </template>
        </UButton>
      </div>
    </div>
  </div>
</template>
