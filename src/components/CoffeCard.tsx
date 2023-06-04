import coffe from '../assets/coffes/Type=Americano.svg'
import Image from 'next/image'
import { CoffeTag } from './CoffeTag'
import { Counter } from './Counter'
import { BuyButton } from './BuyButton'

interface CoffeCardProps {
  coffeImg?: any
  name?: string
  description?: string
  price?: string
  type?: string
}

export function CoffeCard({
  coffeImg,
  name,
  description,
  price,
  type,
}: CoffeCardProps) {
  return (
    <div className="h-[310px] w-[256px] rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-base-card">
      <header className="flex justify-center">
        <Image src={coffe} alt="um copo de cafe" className="-mt-4" />
      </header>
      <div className="flex justify-center gap-[4px]">
        <CoffeTag type="especial" />
        <CoffeTag type="tradicional" />
        <CoffeTag type="gelado" />
      </div>
      <div className="mt-4 flex flex-col items-center justify-center">
        <h1 className="font-alt text-title-s text-base-subtitle">
          Expresso Tradicional
        </h1>
        <p className="mt-2 text-center text-text-s text-base-label">
          O tradicional café feito com água quente e grãos moídos
        </p>
      </div>
      <div className="mt-9 flex items-center justify-center">
        <div className="mr-6 flex items-end">
          <p className="mr-[2px] leading-7 text-base-text">R$</p>
          <span className="text-alt text-title-m text-base-text">9,90</span>
        </div>
        <div className="flex gap-2">
          <Counter value={4} />
          <BuyButton />
        </div>
      </div>
    </div>
  )
}