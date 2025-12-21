<script setup lang="js">
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm px-8">
     <div class="flex-1 flex items-center gap-3">
       <NuxtLink to="/" class="flex items-center gap-3">
<!-- -        <img
-          src="/svlogohead-1.svg"
-          alt="Somkidvittaya School"
-          class="h-12 md:h-16 lg:h-20 w-auto object-contain"
-          loading="eager"
-        /> -->
        <img
          src="/svlogohead-1.svg"
          alt="Somkidvittaya School"
          class="h-8 md:h-10 lg:h-12 w-auto object-contain"
          loading="eager"
        />
       </NuxtLink>
     </div>
 
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
 
         <li>
           <button class="btn btn-outline h-10 text-lg">Register your interest</button>
         </li>
       </ul>
     </div>
   </div>
</template>

<style scoped></style>
