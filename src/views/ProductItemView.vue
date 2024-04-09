<script setup lang="ts">
import WrapperElement from '@/components/ui/WrapperElement.vue'
import { useCartStore } from '@/stores/cart'
import { useProductsStore } from '@/stores/products'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const cartStore = useCartStore()
const productsStore = useProductsStore()

const currentProduct = computed(() =>
  productsStore.products.find((product) => product.id === route.params.id)
)

if (!currentProduct.value) router.replace({ path: '/not-found' })
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
            :src="currentProduct?.imageHref"
          />
        </div>
        <div class="w-1/2 flex flex-col self-stretch h-full">
          <div>
            <h1 class="text-3xl">{{ currentProduct?.name }}</h1>
            <p class="my-6 text-mutated-100">
              {{ currentProduct?.description }}
            </p>
          </div>
          <div class="space-x-6">
            <button
              @click="cartStore.addToCart({ ...currentProduct!, amount: 1 })"
              class="bg-primary p-1 rounded-3xl px-3"
            >
              Add to cart! <span>{{ currentProduct?.price }}$</span>
            </button>
            <button
              @click="productsStore.toggleFavorite(currentProduct!.id)"
              class="bg-mutated-200 p-1 rounded-3xl px-3"
            >
              {{ currentProduct?.isFav ? 'Remove from saved' : ' Add to saved!' }}
            </button>
          </div>
        </div>
      </div>
    </WrapperElement>
  </main>
</template>
