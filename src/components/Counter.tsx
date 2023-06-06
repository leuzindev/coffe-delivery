import { addCoffe, removeCoffe } from 'features/coffeSlice'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

interface CounterProps {
  coffeId?: string
  value: number
  className?: string
}

export function Counter({ value, className, coffeId }: CounterProps) {
  const dispatch = useDispatch()

  function handleAddCoffe() {
    dispatch(addCoffe(coffeId))
    console.log('Cafe adicionado ' + coffeId)
  }
  function handleRemoveCoffe() {
    dispatch(removeCoffe(coffeId))
    console.log('Cafe removido ' + coffeId)
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
