<script setup lang="ts">
import AllProducts from '@/components/product/AllProducts.vue'
import WrapperElement from '@/components/ui/WrapperElement.vue'
import { useProductsStore } from '@/stores/products'
import { ref, computed } from 'vue'

const store = useProductsStore()
const query = ref('')
const resetButtonVisible = computed(() => query.value !== '')
const onSubmit = () => {
  store.searchProducts(query.value)
}

const reset = () => {
  query.value = ''
  store.searchProducts('')
}
</script>
<template>
  <main>
    <WrapperElement>
      <div class="flex flex-col items-center justify-center mt-24 gap-2 text-center">
        <form @submit.prevent="onSubmit" class="flex gap-2 items-center">
          <input
            v-model="query"
            placeholder="Find it.."
            class="bg-mutated-100 rounded-md px-2 py-1 w-72 text-black"
          />
          <button class="bg-primary py-1 rounded-md px-2">Serach</button>
          <button
            @click="reset"
            v-if="resetButtonVisible"
            class="bg-mutated-200 py-1 rounded-md px-2"
          >
            Reset
          </button>
        </form>
      </div>

      <div
        v-if="store.searchResults.length === 0"
        class="flex justify-center items-center mt-10 text-3xl"
      >
        <p>Notihng found for your query</p>
      </div>

      <AllProducts />
    </WrapperElement>
  </main>
</template>
