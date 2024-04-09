<script setup lang="ts">
import AllProducts from '@/components/product/AllProducts.vue'
import WrapperElement from '@/components/ui/WrapperElement.vue'
</script>
<template>
  <main>
    <WrapperElement>
      <div class="flex flex-col items-center justify-center mt-24 gap-2 text-center">
        <div class="flex gap-2 items-center">
          <input class="bg-mutated-100 rounded-md px-2 py-1 w-72 text-black" />
          <button class="bg-primary py-1 rounded-md px-2">Serach</button>
        </div>
      </div>

      <AllProducts />
    </WrapperElement>
  </main>
</template>
