<script setup lang="js">
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <!-- Left: Logo + Name -->
    <div class="flex-1 flex items-center gap-3">
      <NuxtLink to="/" class="flex items-center gap-3">
        <img
          src="/school_logo.png"
          alt="School Logo"
          class="w-24 h-24 object-contain"
        />
        <span class="text-lg font-bold">Somkidvittaya School</span>
      </NuxtLink>
    </div>

    <!-- Right Menu -->
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 items-center">
        <li class="text-lg"><a>about</a></li>
        <li class="text-lg"><NuxtLink to="/Event">events</NuxtLink></li>
        <li class="text-lg"><NuxtLink to="/ListEmployee">employee</NuxtLink></li>

        <li>
          <details>
            <summary class="text-lg">curriculum</summary>
            <ul class="bg-base-100 rounded-t-none p-2">
              <li class="text-lg"><a>Lower Primary School</a></li>
              <li class="text-lg"><a>Upper Primary School</a></li>
              <li class="text-lg"><a>Middle School</a></li>
            </ul>
          </details>
        </li>

        <!-- Button -->
        <li>
          <button class="btn btn-outline h-10 text-lg">Register your interest</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
