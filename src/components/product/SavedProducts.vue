<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import { useProductsStore } from '@/stores/products'
const store = useProductsStore()
</script>
<template>
  <div class="flex flex-wrap gap-16 justify-center items-center mt-10">
    <ProductCard v-for="product in store.favProducts" :key="product.id" :product="product" />

    <div
      v-if="store.favProducts.length === 0"
      class="flex justify-center items-center mt-10 text-3xl"
    >
      <p>You dont have any saved items</p>
    </div>
  </div>
</template>
