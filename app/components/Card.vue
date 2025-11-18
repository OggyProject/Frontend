<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  image: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="card bg-base-100 w-96 shadow-sm rounded-none">
    <figure class="rounded-none">
      <img :src="image" :alt="title" />
    </figure>

    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
