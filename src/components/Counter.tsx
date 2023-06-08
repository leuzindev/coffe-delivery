import { addCoffe, removeCoffe } from 'features/coffeSlice'
import { useDispatch, useSelector } from 'react-redux'

import { FaMinus, FaPlus } from 'react-icons/fa'
import { RootState } from 'store'

interface CounterProps {
  coffeId: number
  value: number
  className?: string
}

export function Counter({ value, className, coffeId }: CounterProps) {
  const dispatch = useDispatch()
  const coffes = useSelector((state: RootState) => state.coffe.coffes)
  const coffeQuantity = coffes.find((coffe) => coffe.id === coffeId)?.quantity

  function handleAddCoffe() {
    dispatch(addCoffe(coffeId))
  }
  function handleRemoveCoffe() {
    dispatch(removeCoffe(coffeId))
  }

  return (
    <div
      className={`${className} flex h-[38px] w-[72px] items-center justify-around rounded-md bg-base-button`}
    >
      <button className="h-full outline-none" onClick={handleRemoveCoffe}>
        <FaMinus className="text-purple" size={13} />
      </button>
      <span className="text-text-m text-base-title">{coffeQuantity}</span>
      <button className="h-full" onClick={handleAddCoffe}>
        <FaPlus className="text-purple" size={13} />
      </button>
    </div>
  )
}
