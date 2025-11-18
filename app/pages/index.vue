<script setup lang="js">
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import Carousel from '~/components/Carousel.vue';

const homeImages = [
  'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
  'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
  'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
  'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp'
]
</script>

<template>
  <Navbar />
  <Carousel :images="homeImages" />
  <Footer />
</template>

<style scoped>  
</style>