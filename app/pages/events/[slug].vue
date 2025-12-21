<script setup>
import { useRoute, useHead } from '#imports'
import events from '../../Data/eventData.json'

const route = useRoute()
const slug = route.params.slug
const event = events.find(e => e.slug === slug) || null

if (event) useHead({ title: event.headline })
</script>

<template>
  <div class="p-6 max-w-4xl mx-auto">
    <NuxtLink to="/event" class="text-sm text-blue-600 mb-4 inline-block">← กลับ</NuxtLink>

    <div v-if="event">
      <h1 class="text-2xl font-bold mb-2">{{ event.headline }}</h1>
      <p class="text-sm text-gray-600 mb-4">{{ event.date }} • {{ event.time || '' }} • {{ event.location || '' }}</p>

      <img
        :src="event.image"
        :alt="event.image_alt"
        class="mx-auto mb-4 rounded-md"
        style="max-width:100%; height:auto;"
        loading="lazy"
      />

      <div v-if="event.gallery?.length" class="grid gap-2 mb-4 sm:grid-cols-2 md:grid-cols-3">
        <img
          v-for="(g,i) in event.gallery"
          :key="i"
          :src="g"
          :alt="`${event.headline} ${i+1}`"
          class="w-full object-contain rounded"
          style="height:auto; max-width:100%;"
          loading="lazy"
        />
      </div>

      <div class="prose mb-4" v-html="event.description"></div>

      <div class="mt-4 text-sm">
        <p v-if="event.organizer"><strong>ผู้จัด:</strong> {{ event.organizer }}</p>
        <p v-if="event.contact?.email"><strong>อีเมล:</strong> <a :href="`mailto:${event.contact.email}`" class="text-blue-600">{{ event.contact.email }}</a></p>
        <p v-if="event.contact?.phone"><strong>โทร:</strong> {{ event.contact.phone }}</p>
        <p v-if="event.registration_link"><a :href="event.registration_link" target="_blank" class="text-blue-600">ลงทะเบียน / รายละเอียดเพิ่มเติม</a></p>
      </div>

      <!-- <div v-if="event.attachments?.length" class="mt-4">
        <h3 class="font-semibold">ไฟล์แนบ</h3>
        <ul class="list-disc ml-5">
          <li v-for="(f,i) in event.attachments" :key="i">
            <a :href="f.url" target="_blank" class="text-blue-600">{{ f.name }}</a>
          </li>
        </ul>
      </div> -->
    </div>

    <div v-else>
      <p>ไม่พบกิจกรรม</p>
    </div>
  </div>
</template>

<style scoped></style>