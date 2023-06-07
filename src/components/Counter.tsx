import {
  addCoffe,
  addCoffeInCart,
  removeCoffe,
  removeCoffeFromCart,
} from 'features/coffeSlice'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'

interface CounterProps {
  coffeId: number
  value: number
  className?: string
}

export function Counter({ value, className, coffeId }: CounterProps) {
  const dispatch = useDispatch()

  const coffes = useSelector((state: RootState) => state.coffe.coffes)
  const coffe = coffes.find((coffe) => coffe.id === coffeId)

  function handleAddCoffe() {
    dispatch(addCoffe(coffeId))
    if (coffe) {
      // dispatch(addCoffeInCart(coffe))
    }
  }
  function handleRemoveCoffe() {
    dispatch(removeCoffe(coffeId))
    if (coffe) {
      // dispatch(removeCoffeFromCart(coffeId))
    }
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
