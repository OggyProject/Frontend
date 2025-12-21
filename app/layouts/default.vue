<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/app/components/Navbar.vue'
import Footer from '~/app/components/Footer.vue'
</script>

<style scoped>

</style>