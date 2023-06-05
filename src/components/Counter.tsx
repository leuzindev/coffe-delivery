import { FaMinus, FaPlus } from 'react-icons/fa'

interface CounterProps {
  value: number
  className?: string
}

export function Counter({ value, className }: CounterProps) {
  return (
    <div
      className={`${className} flex h-[38px] w-[72px] items-center justify-around rounded-md bg-base-button`}
    >
      <button className="h-full outline-none">
        <FaMinus className="text-purple" size={13} />
      </button>
      <span className="text-text-m text-base-title">{value}</span>
      <button className="h-full">
        <FaPlus className="text-purple" size={13} />
      </button>
    </div>
  )
}
