import { FaShoppingCart } from 'react-icons/fa'

import { addCoffeInCart } from 'features/coffeSlice'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'

import { Coffe } from 'interfaces/Coffe'

interface BuyButtonProps {
  coffeId: number
}

export function BuyButton({ coffeId }: BuyButtonProps) {
  const dispatch = useDispatch()

  const coffes: Coffe[] = useSelector((state: RootState) => state.coffe.coffes)
  const coffe = coffes.find((coffe) => coffe.id === coffeId)

  function handleBuyButton() {
    dispatch(addCoffeInCart(coffe))
  }

  return (
    <button
      className="flex h-[38px] w-[38px] items-center justify-center rounded-lg bg-purple-dark transition-colors hover:bg-purple"
      onClick={handleBuyButton}
    >
      <FaShoppingCart className="text-lg text-white" />
    </button>
  )
}
