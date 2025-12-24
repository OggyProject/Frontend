<script setup>
import { computed } from 'vue'
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  image: { type: String, required: true },
  imageAlt: { type: String, default: "" }
})

const names = computed(() => {
  const parts = (props.title || '').split(' / ')
  return { thai: parts[0] || '', en: parts[1] || '' }
})
</script>

<template>
  <div class="card bg-white w-full shadow-sm rounded-lg overflow-hidden text-center">
    <figure class="p-4 bg-gray-100 rounded-lg mx-4 mt-4">
      <img
        :src="props.image"
        :alt="props.imageAlt || names.thai"
        class="mx-auto w-36 sm:w-40 md:w-44 h-44 md:h-52 object-cover rounded-md"
      />
    </figure>

    <div class="card-body py-4 px-4 text-center">
      <p class="text-xs text-blue-600 font-semibold mb-1">{{ names.thai }}</p>
      <p class="card-title text-sm font-bold mb-2">{{ names.en }}</p>
      <p class="text-xs text-gray-600 mb-1">
        <span class="mr-2">✉️</span>
        <a v-if="props.description" :href="`mailto:${props.description}`" class="text-blue-600 break-all">{{ props.description }}</a>
        <span v-else class="text-gray-400">—</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.card-title {
  text-align: center !important;
  margin-left: auto !important;
  margin-right: auto !important;
  display: block !important;
}
</style>