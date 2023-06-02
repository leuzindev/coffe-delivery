import { ReactNode } from 'react'
import LogoCoffe from '../../assets/LogoCoffeDelivery.svg'
import Image from 'next/image'
import { CartButton } from '@/components/CartButton'
export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header>
        <Image src={LogoCoffe} alt="Copo de café com grãos atras" />
        <div>
          <CartButton variant={false} />
        </div>
      </header>
      <div>{children}</div>
    </>
  )
}
