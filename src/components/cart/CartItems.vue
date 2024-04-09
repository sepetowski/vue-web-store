<script setup lang="ts">
import WrapperElement from '@/components/ui/WrapperElement.vue'
import CartItem from './CartItem.vue'
import { useCartStore } from '@/stores/cart'
const store = useCartStore()
</script>

<template>
  <WrapperElement class="relative p-0">
    <div
      class="absolute top-5 right-0 w-96 h-96 bg-mutated-300 shadow-md gap-2 z-20 rounded-md border border-mutated-200 flex flex-col overflow-y-auto p-2"
    >
      <CartItem
        v-for="cartProduct in store.cartProducts"
        :key="cartProduct.id"
        :cart-product="cartProduct"
      />

      <div v-if="store.cartItemsLength > 0" class="w-full flex justify-center items-center my-2">
        <button @click="store.resetAll()" class="bg-primary p-1 rounded-3xl w-full">
          Buy! <span>{{ store.totalPrice.toFixed(2) }}$</span>
        </button>
      </div>
      <div
        v-if="store.cartItemsLength === 0"
        class="w-full h-full flex justify-center items-center my-2"
      >
        <p class="text-2xl">Your cart is empty</p>
      </div>
    </div>
  </WrapperElement>
</template>
