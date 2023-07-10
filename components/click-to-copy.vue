<script setup>
  const props = defineProps({
    id: {
      type: String,
      default: Math.random().toString(36).substring(2),
    },
    label: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "sm",
    },
  });

  const toast = useToast();
  const { label, source } = toRefs(props);
  const { copy } = useCopyToClipboard({
    source,
  });

  const handleCopy = () => {
    copy();
    toast.add({
      id: props.id,
      title: "Copied!",
      description: `${source.value.substring(0, 20)}${
        source.value.length > 20 ? "..." : ""
      }`,
      timeout: 2000,
    });
  };
</script>

<template>
  <ClientOnly>
    <UTooltip text="Click to copy">
      <span
        class="cursor-pointer text-primary-500 underline font-semibold"
        @click="handleCopy"
      >
        {{ label }}
      </span>
    </UTooltip>
  </ClientOnly>
</template>
