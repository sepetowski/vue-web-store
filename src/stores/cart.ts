import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type CartProduct } from '@/types/types'

export const useCartStore = defineStore('cart', () => {
  const cartProducts = ref<CartProduct[]>([])

  const totalPrice = computed(() => {
    return cartProducts.value.reduce((total, product) => {
      return total + product.price * product.amount
    }, 0)
  })

  const cartItemsLength = computed(() => {
    return cartProducts.value.reduce((total, product) => {
      return total + product.amount
    }, 0)
  })

  function addToCart(product: CartProduct) {
    const productIndex = cartProducts.value.findIndex((p) => p.id === product.id)
    if (productIndex !== -1) {
      cartProducts.value = cartProducts.value.map((p) => {
        if (p.id === product.id) {
          return { ...p, amount: p.amount + 1 }
        } else {
          return p
        }
      })
    } else {
      cartProducts.value.push({ ...product, amount: 1 })
    }
  }

  function removeFromCart(productId: string) {
    const productIndex = cartProducts.value.findIndex((p) => p.id === productId)
    if (productIndex !== -1)
      cartProducts.value = cartProducts.value.filter((p) => p.id !== productId)
  }

  function resetAll() {
    cartProducts.value = []
  }

  return { totalPrice, cartProducts, cartItemsLength, addToCart, removeFromCart, resetAll }
})
