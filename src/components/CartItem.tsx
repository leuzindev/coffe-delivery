import Image from 'next/image'
import { DeleteButton } from './DeleteButton'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

interface CartItemProps {
  coffeId: number
  image: any
  label: string
  price: number
  amount: number
}

export function CartItem({
  label,
  price,
  amount,
  image,
  coffeId,
}: CartItemProps) {
  const coffes = useSelector((state: RootState) => state.coffe.coffes)
  const coffe = coffes.find((coffe) => coffe.id === coffeId)

  return (
    <>
      <div className="my-[10px] flex h-20 items-center sm:my-5">
        <Image src={image} alt="xicara de cafe" width={64} height={64} />
        <div className="ml-5 w-full">
          <div className="mb-1 flex flex-wrap justify-between">
            <h4 className="text-text-m text-base-subtitle">{label}</h4>
            <span className="text-text-m font-bold text-base-text">
              R$ {coffe?.total?.toFixed(2).replace('.', ',')}
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <DeleteButton coffeId={coffeId} />
            <span className="font-alt text-title-s text-base-subtitle">
              {amount}
            </span>
          </div>
        </div>
      </div>
      <div className="border-1 h-[1px] border-base-button bg-base-button"></div>
    </>
  )
}
