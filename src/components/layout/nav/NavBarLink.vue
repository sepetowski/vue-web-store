<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{ name: string; to: string }>()
</script>

<template>
  <RouterLink
    class="text-lg hover:underline underline-offset-4"
    activeClass="text-primary"
    :to="to"
    >{{ name }}</RouterLink
  >
</template>
