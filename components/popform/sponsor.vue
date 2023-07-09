<script setup>
  const toast = useToast();

  const { copy } = useCopyToClipboard({
    source: "quatton@skiff.com",
  });

  const handleSponsorForm = () => {
    toast.add({
      id: "sponsor-form",
      title: "TODO",
      description:
        "Sorry for the inconvenience! Please email me for now. (Already in your clipboard!)",
    });
    copy();
  };
</script>

<template>
  <UButton size="lg" @click="handleSponsorForm">I'm interested</UButton>
</template>
