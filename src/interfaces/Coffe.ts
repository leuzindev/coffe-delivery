export interface Coffe {
  id: number
  image: any
  name: string
  descriptions: string
  categories: string[]
  price: number
  quantity: number
  total: number
}

export interface Coffes {
  coffes: Coffe[]
  cart: Coffe[]
}
