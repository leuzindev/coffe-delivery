import coffe from '../assets/coffes/Type=Americano.svg'
import Image from 'next/image'
import { CoffeTag } from './CoffeTag'

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
      <div>
        <CoffeTag type="tradicional" />
      </div>
    </div>
  )
}
