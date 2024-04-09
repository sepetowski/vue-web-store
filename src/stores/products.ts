import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type Product } from '@/types/types'

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([])

  const favProducts = computed(() => products.value.filter((p) => p.isFav))
  const latestProducts = computed(() => products.value.slice(0, 3))

  const searchResults = ref<Product[]>([])

  function searchProducts(query: string) {
    if (!query) {
      searchResults.value = products.value
    } else {
      searchResults.value = products.value.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    }
  }

  function setProducts(newProducts: Product[]) {
    products.value = newProducts
    searchProducts('')
  }

  function toggleFavorite(productId: string) {
    const productIndex = products.value.findIndex((p) => p.id === productId)
    if (productIndex !== -1) {
      products.value[productIndex].isFav = !products.value[productIndex].isFav
    }
  }

  return {
    products,
    favProducts,
    latestProducts,
    searchResults,
    setProducts,
    toggleFavorite,
    searchProducts
  }
})
