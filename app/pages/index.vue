<script setup lang="js">
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import Carousel from '~/components/Carousel.vue';
import Card from '~/components/Card.vue';

const homeImages = [
  'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
  'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
  'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
  'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp'
]

const cardItems = [
  {
    title: "Mission and Vision",
    description: "The students of King's Bangkok love learning and their imaginations are fed by wonderful teachers who know how to engage, inspire and extend their classes.",
    image: "https://www.kingsbangkok.ac.th/assets/page/about/img/mission.jpg"
  },
  {
    title: "Facilities",
    description: "King's Bangkok has worked with parents and leading architects to ensure that we have world-class facilities. We have over 70,000 square metres of state-of-the-art school facilities.",
    image: "https://www.kingsbangkok.ac.th/assets/page/about/img/facilities7.jpg"
  },
  {
    title: "History",
    description: "King's College School, Wimbledon is an independent day school. Founded in 1829 by royal charter, it is a school of over 1,600 students.",
    image: "https://www.kingsbangkok.ac.th/assets/page/about/img/history.jpg"
  }
]

</script>

<template>
  <Navbar />
  <!-- Hero Section -->
  <section>
    <div
      class="hero min-h-screen"
      style="background-image: url('https://www.newmetrics.net/files/uploads/2023/08/Student-Experience-Cover-2-1536x613.jpg');">
      <div class="hero-overlay bg-opacity-40"></div>
        <div class="hero-content text-center text-white">
          <div class="max-w-md">
              <h1 class="text-5xl font-bold">ABOUT</h1>
              <p class="py-6">
              The Academic Excellence of British Education
              Established in Bangkok
              King's College International School Bangkok is a King's College School Wimbledon
              International School, located in the heart of Bangkok on Ratchada–Rama 3 Road.
              </p>
          </div>
        </div>
     </div>
  </section>
  <!-- Carousel -->
  <section class="relative w-full">
  <!-- ข้อความด้านบน -->
    <div
      class="relative inset-0 flex flex-col justify-center items-center z-10 text-center px-4 mt-24 mb-24"
    >
      <h2 class="text-4xl font-bold">At a Glance</h2>
      <p class="mt-4 text-lg max-w-2xl">
        King's College International School Bangkok will be one of the best schools in Asia.
      </p>
      <NuxtLink
        to="/about"
        class="mt-6 inline-block bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        READ MORE
      </NuxtLink>
    </div>
  </section>
  <!-- Carousel อยู่ด้านหลัง -->
  <Carousel :images="homeImages" />

   <section class="relative w-full">
  <!-- ข้อความด้านบน -->
    <div
      class="relative inset-0 flex flex-col justify-center items-center z-10 text-center px-4 mt-24 mb-24"
    >
      <h2 class="text-xl">Executive Principal’s Message</h2>
      <p class="mt-4 text-3xl font-bold max-w-2xl">
        “Our students will leave us with the academic qualificationsdesired by the top universities in the world.”</p>
      <NuxtLink
        to=""
        class="mt-6 inline-block bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        READ MORE
      </NuxtLink>
    </div>
  </section>

  <section class="py-16">
    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
      <Card
        v-for="(item, index) in cardItems"
        :key="index"
        :title="item.title"
        :description="item.description"
        :image="item.image"
      />
    </div>
  </section>



  <Footer />
</template>

<style scoped>  
</style>