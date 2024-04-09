<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarContainer from './components/layout/nav/NavbarContainer.vue'
import { useProductsStore } from './stores/products'
import { dummyData } from './data/dummyProdcuts'

const store = useProductsStore()
store.setProducts(dummyData)
</script>

<template>
  <NavbarContainer />
  <RouterView />
</template>
