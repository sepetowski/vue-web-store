<script setup lang="ts">
import LatesProducts from '@/components/product/LatesProducts.vue'
import WrapperElement from '@/components/ui/WrapperElement.vue'
</script>

<template>
  <main>
    <WrapperElement>
      <div class="flex flex-col items-center justify-center mt-24 gap-2 text-center">
        <h1 class="text-5xl">Chceck our lates products</h1>
        <p class="text-mutated-100 text-2xl">Made with passion and heart</p>
      </div>

      <LatesProducts />
    </WrapperElement>
  </main>
</template>
