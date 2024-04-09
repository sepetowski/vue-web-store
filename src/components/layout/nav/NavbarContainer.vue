<script setup lang="ts">
import WrapperElement from '@/components/ui/WrapperElement.vue'
import NavBarLink from './NavBarLink.vue'
import { RouterLink } from 'vue-router'
import CartContainer from '@/components/cart/CartContainer.vue'
</script>

<template>
  <nav class="bg-background border-b border-mutated-300 sticky top-0 left-0 w-full z-50">
    <WrapperElement>
      <div class="flex justify-between items-center">
        <RouterLink to="/">
          <p class="text-2xl font-light">My<span class="text-primary font-semibold">Store</span></p>
        </RouterLink>
        <div class="flex items-center gap-6">
          <NavBarLink name="products" to="/products" />
          <NavBarLink name="saved" to="/saved" />
          <CartContainer />
        </div>
      </div>
    </WrapperElement>
  </nav>
</template>
