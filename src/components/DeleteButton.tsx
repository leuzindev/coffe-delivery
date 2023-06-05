import { FaTrash } from 'react-icons/fa'

export function DeleteButton() {
  return (
    <button className="flex h-[32px] w-[91px] items-center justify-center gap-1 rounded-md bg-base-button transition-colors hover:bg-base-hover">
      <FaTrash className="text-purple" />
      <span className="text-button-m font-normal">REMOVER</span>
    </button>
  )
}
