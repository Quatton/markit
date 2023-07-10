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
      <p>Try out these tools!</p>
      <div class="grid grid-cols-2 grid-rows-1 gap-4 mt-8">
        <UButton
          size="xl"
          variant="outline"
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
          variant="outline"
          color="gray"
          to="https://www.lemonsqueezy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <nuxt-img
            format="webp"
            src="https://assets.website-files.com/6347244ba8d63489ba51c08e/6347244ba8d6344eb751c0d5_Logo.svg"
            alt="Lemon Squeezy"
            width="128"
            class="my-0"
          />
          <template #trailing>
            <UIcon name="i-heroicons-arrow-up-right" class="ml-auto" />
          </template>
        </UButton>
      </div>
      <p>Sponsored</p>
      <div class="grid grid-cols-2 grid-rows-3 gap-4 mt-8">
        <UButton
          v-for="(_, index) in 4"
          :key="index"
          size="xl"
          :label="`Product #${index + 1}`"
          variant="outline"
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
