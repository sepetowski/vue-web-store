<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarContainer from './components/layout/nav/NavbarContainer.vue'
import { useProductsStore } from './stores/products'
import prodcutsData from './data/dummyProdcuts.json'

const store = useProductsStore()
store.setProducts(prodcutsData)
</script>

<template>
  <NavbarContainer />
  <RouterView />
</template>
