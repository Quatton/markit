<script setup>
  const props = defineProps({
    number: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    isCurrentStep: {
      type: Boolean,
      default: false,
    },
  });
</script>

<template>
  <div class="relative w-16 flex flex-col items-center">
    <div
      :class="[
        'w-8 h-8 rounded-full flex items-center justify-center',
        props.isCurrentStep
          ? 'bg-primary-500 text-white'
          : 'bg-gray-200 text-gray-900',
      ]"
    >
      {{ props.number }}
    </div>
    <span class="absolute mt-10 text-sm text-foreground">{{
      props.label
    }}</span>
  </div>
</template>
