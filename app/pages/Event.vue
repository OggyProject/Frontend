<script setup lang="js">
import events from '../Data/eventData.json'

const formatDate = (d) => {
  const dt = new Date(d)
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(dt)
}

// ถ้าอยากใช้รูปจริง ให้เปลี่ยนเป็นพาธไฟล์ในโปรเจค หรือตั้งค่าใน eventData.json
const thumbnail = (idx) => `https://picsum.photos/seed/event${idx}/300/180`
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-semibold mb-6">ข่าวสารและกิจกรรม</h1>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2">
      <article
        v-for="(ev, idx) in events"
        :key="idx"
        class="flex gap-4 items-start bg-base-100 p-3 rounded shadow-sm"
      >
        <img
          :src="ev.image || thumbnail(idx)"
          :alt="ev.image_alt || ev.headline"
          class="w-40 h-24 object-cover rounded"
        />

        <div class="flex-1">
          <h4 class="text-sm md:text-base font-medium text-sky-800">
            <NuxtLink :to="`/events/${ev.slug}`" class="hover:underline">{{ ev.headline }}</NuxtLink>
          </h4>

          <p class="text-xs text-gray-600 mt-1">{{ ev.short_desc }}</p>

          <div class="mt-2 text-xs text-gray-500 flex items-center gap-2">
            <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/>
            </svg>
            <span>{{ formatDate(ev.date) }}</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped></style>