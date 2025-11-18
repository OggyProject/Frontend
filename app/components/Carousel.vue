<script setup lang="js">
import { ref, onMounted, onUnmounted, computed } from 'vue'

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
const carouselRef = ref(null)
let autoPlayIntervalId = null

const goToSlide = (slideNumber) => {
  activeSlide.value = slideNumber
  // เลื่อน carousel เองโดยไม่กระทบกับ scroll position ของหน้า
  if (process.client && carouselRef.value) {
    const slideWidth = carouselRef.value.offsetWidth
    carouselRef.value.scrollLeft = (slideNumber - 1) * slideWidth
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

onMounted(() => {
  if (process.client) {
    window.addEventListener('keydown', handleKeydown)
    startAutoPlay()
  }
})

onUnmounted(() => {
  stopAutoPlay()
  if (process.client) {
    window.removeEventListener('keydown', handleKeydown)
  }
})
</script>

<template>
  <div class="relative">
    <div ref="carouselRef" class="carousel w-full overflow-hidden">
      <div 
        v-for="(image, index) in images" 
        :key="index"
        :id="`carousel-item${index + 1}`" 
        class="carousel-item w-full"
      >
        <img :src="image" :alt="`Slide ${index + 1}`" class="w-full object-cover" />
      </div>
    </div>

    <!-- Indicators -->
    <div class="indicators absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      <button 
        v-for="n in totalSlides" 
        :key="n"
        @click="goToSlide(n); resetAutoPlay()"
        class="cursor-pointer"
      >
        <div class="dot" :class="{ active: activeSlide === n }"></div>
      </button>
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

.carousel {
  scroll-behavior: smooth;
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel-item {
  flex: 0 0 100%;
  scroll-snap-align: start;
}
</style>