export interface Product {
  id: string
  name: string
  isFav: boolean
  shortDescription: string
  description: string
  price: number
  imageHref: string
}
export interface CartProduct extends Product {
  amount: number
}
