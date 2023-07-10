<script setup lang="ts">
  const props = defineProps({
    close: {
      type: Function,
      required: true,
    },
  });

  const name = ref("");
  const selectedTag = ref("");
  const other = ref("");
  const email = ref("");
  const details = ref("");

  const isSubmitting = ref(false);

  const { data, pending } = useFetch("/api/sponsor-form", {
    server: true,
  });

  const checked = ref(Array(data.value?.helps.length ?? 0).fill(false));
  const toast = useToast();
  const handleFormSubmit = async () => {
    if (isSubmitting.value) return;
    isSubmitting.value = true;
    const payload = {
      name: name.value,
      category: selectedTag.value,
      other: other.value,
      email: email.value,
      helps: data.value?.helps.filter((_, index) => checked.value[index]) ?? [],
      details: `${other.value + "\n\n"}${details.value}`,
    };

    const res = await $fetch("/api/sponsor-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    }).catch((err) => {
      toast.add({
        title: "Error",
        description: err.message ?? "Something went wrong",
        color: "red",
      });
      return null;
    });

    if (res) {
      toast.add({
        title: "Success",
        description: "Thank you for your interest! We'll get back to you soon.",
        color: "green",
      });

      name.value = "";
      selectedTag.value = "";
      other.value = "";
      email.value = "";
      details.value = "";
      checked.value = Array(data.value?.helps.length ?? 0).fill(false);

      props.close();
    }

    isSubmitting.value = false;
  };
</script>

<template>
  <form
    class="space-y-3"
    @submit="
      (e) => {
        e.preventDefault();
        handleFormSubmit();
      }
    "
  >
    <UFormGroup name="name" label="Name of the product/company">
      <UInput v-model="name" />
    </UFormGroup>
    <div class="flex gap-2">
      <UFormGroup name="tag" label="Product Category">
        <USelect
          v-model="selectedTag"
          :options="data?.tags.map((option) => option.name) ?? ['Other']"
        />
      </UFormGroup>
      <UFormGroup
        v-if="selectedTag === 'Other'"
        name="other"
        label="Other (Please specify)"
        class="flex-1"
      >
        <UInput v-model="other" />
      </UFormGroup>
    </div>
    <UFormGroup name="email" label="Email">
      <UInput v-model="email" placeholder="email@example.com" type="email" />
    </UFormGroup>
    <UFormGroup
      name="helps"
      label="We can help the users with"
      class="space-y-2"
    >
      <p class="text-sm text-muted-foreground">Select all that apply</p>
    </UFormGroup>

    <div class="grid grid-cols-2 gap-4">
      <UCheckbox
        v-for="(item, index) in data?.helps.map((option) => option.name) ?? []"
        :key="item"
        v-model="checked[index]"
        :label="item"
      />
    </div>
    <UFormGroup name="details" label="Details">
      <UTextarea
        v-model="details"
        :resize="false"
        placeholder="Other details you'd like to specify"
      />
    </UFormGroup>
    <div class="flex justify-center">
      <UButton
        size="lg"
        type="submit"
        :disabled="pending"
        :loading="isSubmitting"
      >
        Submit
      </UButton>
    </div>
  </form>
</template>
