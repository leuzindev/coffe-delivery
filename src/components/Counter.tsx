import { addCoffe, removeCoffe } from 'features/coffeSlice'
import { useDispatch } from 'react-redux'

import { FaMinus, FaPlus } from 'react-icons/fa'

interface CounterProps {
  coffeId: number
  value: number
  className?: string
}

export function Counter({ value, className, coffeId }: CounterProps) {
  const dispatch = useDispatch()

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
      <button className="h-full outline-none">
        <FaMinus
          className="text-purple"
          size={13}
          onClick={handleRemoveCoffe}
        />
      </button>
      <span className="text-text-m text-base-title">{value}</span>
      <button className="h-full">
        <FaPlus className="text-purple" size={13} onClick={handleAddCoffe} />
      </button>
    </div>
  )
}
