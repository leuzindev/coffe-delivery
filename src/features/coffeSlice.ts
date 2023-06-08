import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Coffes } from 'interfaces/Coffe'

import expressoTradicionalImg from '../assets/coffes/Type=Expresso.svg'
import expressoAmericanoImg from '../assets/coffes/Type=Americano.svg'
import expressoCremosoImg from '../assets/coffes/Type=Expresso Cremoso.svg'
import expressoGeladoImg from '../assets/coffes/Type=Café Gelado.svg'
import cafeComLeiteImg from '../assets/coffes/Type=Café com Leite.svg'
import latteImg from '../assets/coffes/Type=Latte.svg'
import capuccinoImg from '../assets/coffes/Type=Capuccino.svg'
import macchiatoImg from '../assets/coffes/Type=Macchiato.svg'
import mocaccinoImg from '../assets/coffes/Type=Mochaccino.svg'
import chocolateQuenteImg from '../assets/coffes/Type=Chocolate Quente.svg'
import cubanoImg from '../assets/coffes/Type=Cubano.svg'
import havaianoImg from '../assets/coffes/Type=Havaiano.svg'
import arabeImg from '../assets/coffes/Type=Árabe.svg'
import irlandesImg from '../assets/coffes/Type=Irlandês.svg'

const initialState: Coffes = {
  coffes: [
    {
      id: 1,
      image: expressoTradicionalImg,
      name: 'Expresso Tradicional',
      descriptions: 'O tradicional café feito com água quente e grãos moídos',
      categories: ['Tradicional'],
      price: 9.9,
      quantity: 1,
      total: 0,
    },
    {
      id: 2,
      image: expressoAmericanoImg,
      name: 'Expresso Americano',
      descriptions: 'Expresso diluído, menos intenso que o tradicional',
      categories: ['Tradicional'],
      price: 9.9,
      quantity: 1,
      total: 0,
    },
    {
      id: 3,
      image: expressoCremosoImg,
      name: 'Expresso Cremoso',
      descriptions: 'Café expresso tradicional com espuma cremosa',
      categories: ['Tradicional'],
      price: 9.9,
      quantity: 1,
      total: 0,
    },
    {
      id: 4,
      image: expressoGeladoImg,
      name: 'Expresso Gelado',
      descriptions: 'Bebida preparada com café expresso e cubos de gelo',
      categories: ['Tradicional', 'Gelado'],
      quantity: 1,
      price: 9.9,
      total: 0,
    },
    {
      id: 5,
      image: cafeComLeiteImg,
      name: 'Café com Leite',
      descriptions: 'Meio a meio de expresso tradicional com leite vaporizado',
      categories: ['Tradicional', 'Com Leite'],
      price: 9.9,
      quantity: 1,
      total: 0,
    },
    {
      id: 6,
      image: latteImg,
      name: 'Latte',
      descriptions:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      categories: ['Tradicional', 'Com Leite'],
      price: 9.9,
      quantity: 1,
      total: 0,
    },
    {
      id: 7,
      image: capuccinoImg,
      name: 'Capuccino',
      descriptions:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      categories: ['Tradicional', 'Com Leite'],
      price: 9.9,
      quantity: 1,
      total: 0,
    },
    {
      id: 8,
      image: macchiatoImg,
      name: 'Macchiato',
      descriptions:
        'Café expresso misturado com um pouco de leite quente e espuma',
      categories: ['Tradicional', 'Com Leite'],
      price: 9.9,
      quantity: 1,
      total: 0,
    },
    {
      id: 9,
      image: mocaccinoImg,
      name: 'Mocaccino',
      descriptions:
        'Café expresso com calda de chocolate, pouco leite e espuma',
      categories: ['Tradicional', 'Com Leite'],
      price: 9.9,
      quantity: 1,
      total: 0,
    },
    {
      id: 10,
      image: chocolateQuenteImg,
      name: 'Chocolate Quente',
      descriptions:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      categories: ['Especial', 'Com Leite'],
      price: 9.9,
      quantity: 1,
      total: 0,
    },
    {
      id: 11,
      image: cubanoImg,
      name: 'Cubano',
      descriptions:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      categories: ['Especial', 'Alcoólico', 'Gelado'],
      price: 9.9,
      quantity: 1,
      total: 0,
    },
    {
      id: 12,
      image: havaianoImg,
      name: 'Havaiano',
      descriptions: 'Bebida adocicada preparada com café e leite de coco',
      categories: ['Especial'],
      price: 9.9,
      quantity: 1,
      total: 0,
    },
    {
      id: 13,
      image: arabeImg,
      name: 'Árabe',
      descriptions: 'Bebida preparada com grãos de café árabe e especiarias',
      categories: ['Especial'],
      price: 9.9,
      quantity: 1,
      total: 0,
    },
    {
      id: 14,
      image: irlandesImg,
      name: 'Irlandês',
      descriptions:
        'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      categories: ['Especial', 'Alcoólico'],
      price: 9.9,
      quantity: 1,
      total: 0,
    },
  ],
  cart: [],
}

const coffeSlice = createSlice({
  name: 'coffe',
  initialState,
  reducers: {
    addCoffe: (state: Coffes, action: PayloadAction<number>) => {
      const coffeIndex = state.coffes.findIndex(
        (coffe) => coffe.id === action.payload,
      )
      if (coffeIndex !== -1) {
        const updatedCoffes = [...state.coffes]
        updatedCoffes[coffeIndex] = {
          ...updatedCoffes[coffeIndex],
          quantity: updatedCoffes[coffeIndex].quantity + 1,
        }
        const cartItemIndex = state.cart.findIndex(
          (item) => item.id === action.payload,
        )
        if (cartItemIndex !== -1) {
          const updatedCart = [...state.cart]
          updatedCart[cartItemIndex] = {
            ...updatedCart[cartItemIndex],
            quantity: updatedCart[cartItemIndex].quantity + 1,
          }
          return { ...state, coffes: updatedCoffes, cart: updatedCart }
        }
        return { ...state, coffes: updatedCoffes }
      }
      return state
    },
    removeCoffe: (state: Coffes, action: PayloadAction<number>) => {
      const coffeIndex = state.coffes.findIndex(
        (coffe) => coffe.id === action.payload,
      )
      if (coffeIndex !== -1 && state.coffes[coffeIndex].quantity >= 1) {
        const updatedCoffes = [...state.coffes]
        updatedCoffes[coffeIndex] = {
          ...updatedCoffes[coffeIndex],
          quantity: updatedCoffes[coffeIndex].quantity - 1,
        }
        const cartItemIndex = state.cart.findIndex(
          (item) => item.id === action.payload,
        )
        if (cartItemIndex !== -1) {
          const updatedCart = [...state.cart]
          updatedCart[cartItemIndex] = {
            ...updatedCart[cartItemIndex],
            quantity: updatedCart[cartItemIndex].quantity - 1,
          }
          if (updatedCart[cartItemIndex].quantity === 0) {
            updatedCart.splice(cartItemIndex, 1)
          }
          return { ...state, coffes: updatedCoffes, cart: updatedCart }
        }
        return { ...state, coffes: updatedCoffes }
      }
      return state
    },
    addCoffeInCart: (state: Coffes, action: PayloadAction<any>) => {
      const coffeQuantity = action.payload.quantity
      if (coffeQuantity >= 1) {
        const updatedCoffes = state.coffes.map((coffe) => {
          if (coffe.id === action.payload.id) {
            const total = coffe.price * coffeQuantity
            return { ...coffe, quantity: coffeQuantity, total }
          }
          return coffe
        })

        const updatedCart = [
          ...state.cart,
          { ...action.payload, total: action.payload.price * coffeQuantity },
        ]

        return { ...state, coffes: updatedCoffes, cart: updatedCart }
      }
      return state
    },
    removeCoffeFromCart: (state: Coffes, action: PayloadAction<number>) => {
      const updatedCart = state.cart.filter(
        (coffe) => coffe.id !== action.payload,
      )

      const updatedCoffes = state.coffes.map((coffe) => {
        if (coffe.id === action.payload) {
          return { ...coffe, quantity: 1, total: 0 }
        }
        return coffe
      })

      return { ...state, coffes: updatedCoffes, cart: updatedCart }
    },
  },
})

export const { addCoffe, removeCoffe, addCoffeInCart, removeCoffeFromCart } =
  coffeSlice.actions
export default coffeSlice.reducer
