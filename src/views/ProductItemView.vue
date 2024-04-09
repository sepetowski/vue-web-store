<script setup lang="ts">
import WrapperElement from '@/components/ui/WrapperElement.vue'
</script>

<template>
  <main>
    <WrapperElement>
      <div class="flex items-center justify-center mt-24 gap-10 text-center w-full h-full">
        <div
          class="h-full w-1/2 border rounded-lg bg-mutated-300 border-mutated-200 shadow-2xl shadow-primary relative overflow-hidden group"
        >
          <img
            class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
            src="https://nextui.org/images/card-example-5.jpeg"
          />
        </div>
        <div class="w-1/2 flex flex-col self-stretch h-full">
          <div>
            <h1 class="text-3xl">{{ $route.params.id }}</h1>
            <p class="my-6 text-mutated-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestias ipsa tempore
              obcaecati eaque odit! Enim aliquid dolorum eos fuga! Soluta, repudiandae! Repudiandae
              ipsa soluta officiis tenetur amet minus perferendis, exercitationem neque blanditiis
              porro natus, necessitatibus inventore quasi unde dolorem quod labore aliquid sapiente
              distinctio. Odit delectus exercitationem obcaecati eum!
            </p>
          </div>
          <div class="space-x-6">
            <button class="bg-primary p-1 rounded-3xl px-3">Add to cart!</button>
            <button class="bg-mutated-200 p-1 rounded-3xl px-3">Add to saved!</button>
          </div>
        </div>
      </div>
    </WrapperElement>
  </main>
</template>
