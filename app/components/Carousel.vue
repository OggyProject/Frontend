<script setup lang="js">
import { ref, onBeforeMount, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  },
  autoPlayInterval: {
    type: Number,
    default: 5000
  }
})

const activeSlide = ref(1)
const totalSlides = computed(() => props.images.length)
let autoPlayIntervalId = null

const goToSlide = (slideNumber) => {
  activeSlide.value = slideNumber
  if (process.client) {
    window.location.hash = `#carousel-item${slideNumber}`
  }
}

const nextSlide = () => {
  const next = activeSlide.value >= totalSlides.value ? 1 : activeSlide.value + 1
  goToSlide(next)
}

const prevSlide = () => {
  const prev = activeSlide.value <= 1 ? totalSlides.value : activeSlide.value - 1
  goToSlide(prev)
}

const startAutoPlay = () => {
  if (process.client) {
    autoPlayIntervalId = setInterval(() => {
      nextSlide()
    }, props.autoPlayInterval)
  }
}

const stopAutoPlay = () => {
  if (autoPlayIntervalId) {
    clearInterval(autoPlayIntervalId)
  }
}

const resetAutoPlay = () => {
  stopAutoPlay()
  startAutoPlay()
}

const handleKeydown = (event) => {
  if (event.key === 'ArrowLeft') {
    prevSlide()
    resetAutoPlay()
  } else if (event.key === 'ArrowRight') {
    nextSlide()
    resetAutoPlay()
  }
}

const updateActive = () => {
  if (process.client) {
    const hash = window.location.hash
    if (hash && hash.startsWith('#carousel-item')) {
      const itemNumber = hash.replace('#carousel-item', '')
      activeSlide.value = parseInt(itemNumber) || 1
    }
  }
}

onBeforeMount(() => {
  // เช็ค hash ก่อน mount เพื่อป้องกัน hydration mismatch
  updateActive()
})

onMounted(() => {
  if (process.client) {
    window.addEventListener('hashchange', updateActive)
    window.addEventListener('keydown', handleKeydown)
    startAutoPlay()
  }
})

onUnmounted(() => {
  stopAutoPlay()
  if (process.client) {
    window.removeEventListener('hashchange', updateActive)
    window.removeEventListener('keydown', handleKeydown)
  }
})
</script>

<template>
  <div class="relative">
    <div class="carousel w-full">
      <div 
        v-for="(image, index) in images" 
        :key="index"
        :id="`carousel-item${index + 1}`" 
        class="carousel-item w-full"
      >
        <img :src="image" :alt="`Slide ${index + 1}`" class="w-full" />
      </div>
    </div>

    <!-- Indicators -->
    <div class="indicators absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      <a 
        v-for="n in totalSlides" 
        :key="n"
        :href="`#carousel-item${n}`" 
        @click.prevent="activeSlide = n; resetAutoPlay()"
      >
        <div class="dot" :class="{ active: activeSlide === n }"></div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.dot {
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.5);
  transition: background 0.3s ease;
}

.dot.active {
  background: rgb(255, 255, 255);
}
</style>