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
    <UToolTip text="Click to copy">
      <span class="cursor-pointer underline" @click="handleCopy">{{
        label
      }}</span>
    </UToolTip>
  </ClientOnly>
</template>
