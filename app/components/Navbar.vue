<script setup lang="js">
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm px-4 md:px-8">
    <!-- Logo -->
    <div class="flex-1">
      <NuxtLink to="/" class="flex items-center gap-3">
        <img
          src="/svlogohead-1.svg"
          alt="Somkidvittaya School"
          class="h-8 md:h-10 lg:h-12 w-auto object-contain"
          loading="eager"
        />
      </NuxtLink>
    </div>

    <!-- Desktop Menu -->
    <div class="flex-none hidden md:flex">
      <ul class="menu menu-horizontal px-1 items-center gap-2">
        <li class="text-base lg:text-lg"><a>about</a></li>
        <li class="text-base lg:text-lg"><NuxtLink to="/Event">events</NuxtLink></li>
        <li class="text-base lg:text-lg"><NuxtLink to="/ListEmployee">employee</NuxtLink></li>

        <li class="relative z-50">
          <details>
            <summary class="text-base lg:text-lg">curriculum</summary>
            <ul class="bg-base-100 rounded-t-none p-2">
              <li class="text-base lg:text-lg"><a>Lower Primary School</a></li>
              <li class="text-base lg:text-lg"><a>Upper Primary School</a></li>
              <li class="text-base lg:text-lg"><a>Middle School</a></li>
            </ul>
          </details>
        </li>

        <li>
          <button class="btn btn-outline h-10 text-base lg:text-lg">Register your interest</button>
        </li>
      </ul>
    </div>

    <!-- Mobile Hamburger Menu -->
    <div class="flex-none md:hidden">
      <button @click="isMenuOpen = !isMenuOpen" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </button>
    </div>
  </div>

  <!-- Mobile Menu Dropdown -->
  <div v-if="isMenuOpen" class="md:hidden bg-base-100 shadow-sm px-4 py-2 border-t">
    <ul class="menu menu-compact w-full gap-1">
      <li><a @click="isMenuOpen = false">about</a></li>
      <li><NuxtLink to="/Event" @click="isMenuOpen = false">events</NuxtLink></li>
      <li><NuxtLink to="/ListEmployee" @click="isMenuOpen = false">employee</NuxtLink></li>
      <li>
        <details>
          <summary>curriculum</summary>
          <ul class="bg-base-100">
            <li><a>Lower Primary School</a></li>
            <li><a>Upper Primary School</a></li>
            <li><a>Middle School</a></li>
          </ul>
        </details>
      </li>
      <li><button class="btn btn-outline w-full text-sm">Register your interest</button></li>
    </ul>
  </div>
</template>

<style scoped></style>
