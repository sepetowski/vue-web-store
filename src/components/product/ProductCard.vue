<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Heart } from 'lucide-vue-next'
</script>
<template>
  <div
    class="border rounded-lg bg-mutated-300 border-mutated-200 shadow-2xl w-80 h-96 shadow-primary relative overflow-hidden group"
  >
    <div class="p-4 absolute top-0 left-0 z-10 flex justify-between items-center w-full">
      <div>
        <p class="text-base text-mutated-100 uppercase font-thin">new</p>
        <h2 class="text-3xl">Title of product</h2>
      </div>
      <button
        class="bg-mutated-300/30 w-8 h-8 rounded-full flex justify-center items-center text-primary"
      >
        <Heart :size="18" />
      </button>
    </div>
    <div class="h-full w-full">
      <img
        class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
        src="https://nextui.org/images/card-example-5.jpeg"
      />
    </div>
    <div
      class="bg-black/50 border-t border-mutated-200 backdrop-blur-sm absolute bottom-0 left-0 w-full p-4 flex items-center justify-between"
    >
      <div class="text-mutated-100 text-sm">
        <p>Breathing App</p>
        <p>Get a good night's sleep.</p>
      </div>
      <RouterLink class="bg-primary p-1 rounded-3xl px-3" to="/">Chcek</RouterLink>
    </div>
  </div>
</template>
