import { FaShoppingCart } from 'react-icons/fa'

export function BuyButton() {
  return (
    <button className="flex h-[38px] w-[38px] items-center justify-center rounded-lg bg-purple-dark transition-colors hover:bg-purple">
      <FaShoppingCart className="text-lg text-white" />
    </button>
  )
}
