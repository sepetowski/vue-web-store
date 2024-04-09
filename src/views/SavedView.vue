<script setup lang="ts">
import SavedProducts from '@/components/product/SavedProducts.vue'
import WrapperElement from '@/components/ui/WrapperElement.vue'
</script>
<template>
  <main>
    <WrapperElement>
      <div class="flex flex-col items-center justify-center mt-24 gap-2 text-center">
        <h1 class="text-5xl">your saved ones</h1>
      </div>

      <SavedProducts />
    </WrapperElement>
  </main>
</template>
