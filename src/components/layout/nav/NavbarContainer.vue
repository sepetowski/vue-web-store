<script setup lang="ts">
import WrapperElement from '@/components/ui/WrapperElement.vue'
import NavBarLink from './NavBarLink.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="bg-background border-b border-mutated-300">
    <WrapperElement>
      <div class="flex justify-between items-center">
        <RouterLink to="/">
          <p class="text-2xl font-light">My<span class="text-primary font-semibold">Store</span></p>
        </RouterLink>
        <div class="flex items-center gap-6">
          <NavBarLink name="products" to="/products" />
          <NavBarLink name="saved" to="/saved" />
          <NavBarLink name="about" to="/about" />
        </div>
      </div>
    </WrapperElement>
  </nav>
</template>
