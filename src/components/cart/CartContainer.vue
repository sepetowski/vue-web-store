<script setup lang="ts">
import { ShoppingCart } from 'lucide-vue-next'
import CartItems from './CartItems.vue'
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
const store = useCartStore()

const isOpen = ref(false)

const onChangeOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="relative">
    <button @click="onChangeOpen" class="w-8 h-8 flex justify-center items-center">
      <ShoppingCart :size="20" />
    </button>

    <div
      v-if="store.cartItemsLength > 0 && store.cartItemsLength < 10"
      class="absolute top-[-5px] right-[-10px] w-5 h-5 flex justify-center items-center rounded-full bg-primary text-xs"
    >
      <p>
        {{ store.cartItemsLength >= 10 ? '+9' : store.cartItemsLength }}
      </p>
    </div>
    <CartItems v-if:="isOpen" />
  </div>
</template>
