import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Coffe, Coffes } from 'interfaces/Coffe'

import { v4 as uuidv4 } from 'uuid'

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
      id: '22',
      image: expressoTradicionalImg,
      name: 'Expresso Tradicional',
      descriptions: 'O tradicional café feito com água quente e grãos moídos',
      categories: ['Tradicional'],
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      image: expressoAmericanoImg,
      name: 'Expresso Americano',
      descriptions: 'Expresso diluído, menos intenso que o tradicional',
      categories: ['Tradicional'],
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      image: expressoCremosoImg,
      name: 'Expresso Cremoso',
      descriptions: 'Café expresso tradicional com espuma cremosa',
      categories: ['Tradicional'],
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      image: expressoGeladoImg,
      name: 'Expresso Gelado',
      descriptions: 'Bebida preparada com café expresso e cubos de gelo',
      categories: ['Tradicional', 'Gelado'],
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      image: cafeComLeiteImg,
      name: 'Café com Leite',
      descriptions: 'Meio a meio de expresso tradicional com leite vaporizado',
      categories: ['Tradicional', 'Com Leite'],
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      image: latteImg,
      name: 'Latte',
      descriptions:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      categories: ['Tradicional', 'Com Leite'],
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      image: capuccinoImg,
      name: 'Capuccino',
      descriptions:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      categories: ['Tradicional', 'Com Leite'],
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      image: macchiatoImg,
      name: 'Macchiato',
      descriptions:
        'Café expresso misturado com um pouco de leite quente e espuma',
      categories: ['Tradicional', 'Com Leite'],
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      image: mocaccinoImg,
      name: 'Mocaccino',
      descriptions:
        'Café expresso com calda de chocolate, pouco leite e espuma',
      categories: ['Tradicional', 'Com Leite'],
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      image: chocolateQuenteImg,
      name: 'Chocolate Quente',
      descriptions:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      categories: ['Especial', 'Com Leite'],
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      image: cubanoImg,
      name: 'Cubano',
      descriptions:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      categories: ['Especial', 'Alcoólico', 'Gelado'],
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      image: havaianoImg,
      name: 'Havaiano',
      descriptions: 'Bebida adocicada preparada com café e leite de coco',
      categories: ['Especial'],
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      image: arabeImg,
      name: 'Árabe',
      descriptions: 'Bebida preparada com grãos de café árabe e especiarias',
      categories: ['Especial'],
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      image: irlandesImg,
      name: 'Irlandês',
      descriptions:
        'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      categories: ['Especial', 'Alcoólico'],
      price: '9,90',
      quantity: 0,
    },
  ],
  cart: [],
}

const coffeSlice = createSlice({
  name: 'coffe',
  initialState,
  reducers: {
    addCoffe: (state: Coffes, action: PayloadAction<Coffe>) => {
      state.coffes.push(action.payload)
    },
  },
})

export const { addCoffe } = coffeSlice.actions
export default coffeSlice.reducer