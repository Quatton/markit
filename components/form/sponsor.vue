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

  const { data, pending } = useFetch("/api/sponsor-form");

  const checked = ref(Array(data.value?.helps.length ?? 0).fill(false));
  const toast = useToast();
  const handleFormSubmit = async () => {
    if (isSubmitting.value) return;
    isSubmitting.value = true;
    const payload = {
      name: name.value,
      category: selectedTag.value === "Other" ? other.value : selectedTag.value,
      email: email.value,
      helps: data.value?.helps.filter((_, index) => checked.value[index]) ?? [],
      details: details.value,
    };

    const res = await $fetch("/api/sponsor-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
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
    }

    isSubmitting.value = false;

    name.value = "";
    selectedTag.value = "";
    other.value = "";
    email.value = "";
    details.value = "";

    props.close();
  };
</script>

<template>
  <form
    class="p-8 space-y-4"
    @submit="
      (e) => {
        e.preventDefault();
        handleFormSubmit();
      }
    "
  >
    <UFormGroup name="name" label="Name of your product">
      <UInput v-model="name" />
    </UFormGroup>
    <UFormGroup name="tag" label="Category">
      <USelect
        v-model="selectedTag"
        :options="data?.tags.map((option) => option.name) ?? ['Other']"
      />
    </UFormGroup>
    <UFormGroup
      v-if="selectedTag === 'Other'"
      name="other"
      label="Other (Please specify)"
    >
      <UInput v-model="other" />
    </UFormGroup>

    <UFormGroup name="email" label="Email">
      <UInput v-model="email" placeholder="email@example.com" type="email" />
    </UFormGroup>

    <UFormGroup
      name="helps"
      label="We can help the users with"
      class="space-y-2"
    >
      <p class="text-sm text-gray-500">Select all that apply</p>
    </UFormGroup>
    <UCheckbox
      v-for="(item, index) in data?.helps.map((option) => option.name) ?? []"
      :key="item"
      v-model="checked[index]"
      :label="item"
    />
    <UFormGroup name="details" label="Details">
      <UTextarea
        v-model="details"
        :resize="false"
        placeholder="Other details you'd like to specify"
      />
    </UFormGroup>
    <div class="flex justify-center">
      <UButton
        size="md"
        type="submit"
        :disabled="pending"
        :loading="isSubmitting"
      >
        Submit
      </UButton>
    </div>
  </form>
</template>
