'use client'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

interface CartButtonProps {
  variant: boolean
  value?: number
}

export function CartButton({ variant, value }: CartButtonProps) {
  const numberOfItemsInCart = useSelector(
    (state: RootState) => state.coffe.cart.length,
  )

  return (
    <div className="relative">
      <div className="absolute -right-2 top-1 -mt-3 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-yellow-dark text-text-xs text-white">
        <span>{numberOfItemsInCart}</span>
      </div>
      <div className=" flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-lg bg-yellow-light">
        <FaShoppingCart className="text-lg text-yellow-dark" />
      </div>
    </div>
  )
}
