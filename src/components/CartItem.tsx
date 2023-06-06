import Image from 'next/image'
import CoffeImg from '../assets/coffes/Type=Americano.svg'
import { Counter } from './Counter'
import { DeleteButton } from './DeleteButton'

interface CartItemProps {
  label?: string
  price?: string
  amount?: number
}

export function CartItem({ label, price, amount }: CartItemProps) {
  return (
    <>
      <div className="my-[10px] flex h-20 items-center sm:my-5">
        <Image src={CoffeImg} alt="xicara de cafe" width={64} height={64} />
        <div className="ml-5 w-full">
          <div className="mb-1 flex flex-wrap justify-between">
            <h4 className="text-text-m text-base-subtitle">
              Expresso Tradicional
            </h4>
            <span className="text-text-m font-bold text-base-text">
              R$ 9,90
            </span>
          </div>
          <div className="flex gap-2">
            <Counter className="h-[31px]" value={3} />
            <DeleteButton />
          </div>
        </div>
      </div>
      <div className="border-1 h-[1px] border-base-button bg-base-button"></div>
    </>
  )
}
