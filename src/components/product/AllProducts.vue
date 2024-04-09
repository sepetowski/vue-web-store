<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import { useProductsStore } from '@/stores/products'
const store = useProductsStore()
</script>
<template>
  <div class="flex flex-wrap gap-16 justify-center items-center mt-10">
    <ProductCard v-for="product in store.searchResults" :key="product.id" :product="product" />
  </div>
</template>
