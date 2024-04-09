<script setup lang="ts">
import { X } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import { type CartProduct } from '@/types/types'
import { useCartStore } from '@/stores/cart'
const store = useCartStore()

defineProps<{ cartProduct: CartProduct }>()
</script>
<template>
  <div class="p-2 bg-background/80 rounded-md flex justify-between items-center">
    <div class="flex items-center gap-2">
      <div class="h-12 w-12 rounded-md overflow-hidden">
        <img class="object-cover w-full h-full" :src="cartProduct.imageHref" />
      </div>
      <div>
        <RouterLink :to="`/products/product/${cartProduct.id}`">
          <p class="text-sm font-bold">{{ cartProduct.name }}</p>
        </RouterLink>
        <p>
          x <span>{{ cartProduct.amount }}</span>
        </p>
      </div>
    </div>
    <div>
      <button
        @click="store.removeFromCart(cartProduct.id)"
        class="w-6 h-6 flex justify-center items-center text-red-500"
      >
        <X :size="20" />
      </button>
    </div>
  </div>
</template>
