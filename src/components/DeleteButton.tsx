import { removeCoffeFromCart } from 'features/coffeSlice'
import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

interface DeleteButtonProps {
  coffeId: number
}

export function DeleteButton({ coffeId }: DeleteButtonProps) {
  const dispacth = useDispatch()

  function handleDeleteCoffe() {
    dispacth(removeCoffeFromCart(coffeId))
  }

  return (
    <button
      className="flex h-[32px] w-[91px] items-center justify-center gap-1 rounded-md bg-base-button transition-colors hover:bg-base-hover"
      onClick={handleDeleteCoffe}
    >
      <FaTrash className="text-purple" />
      <span className="text-button-m font-normal">REMOVER</span>
    </button>
  )
}
