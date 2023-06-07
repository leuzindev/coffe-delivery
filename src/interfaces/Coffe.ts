export interface Coffe {
  id: number
  image: any
  name: string
  descriptions: string
  categories: string[]
  price: string
  quantity: number
}

export interface Coffes {
  coffes: Coffe[]
  cart: Coffe[]
}
