import { FaMapMarkerAlt } from 'react-icons/fa'

interface AddresButtonProps {
  address: string
}

export function AddresButton({ address }: AddresButtonProps) {
  return (
    <div className="flex w-[143px] items-center justify-center gap-2 rounded-md bg-purple-light">
      <FaMapMarkerAlt className="text-lg text-purple" />
      <span className="text-text-s text-purple-dark">{address}</span>
    </div>
  )
}
