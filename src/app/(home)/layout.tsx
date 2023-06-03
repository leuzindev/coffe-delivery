import { ReactNode } from 'react'
import LogoCoffe from '../../assets/LogoCoffeDelivery.svg'
import Image from 'next/image'
import { CartButton } from '@/components/CartButton'
import AddresButton from '@/components/AddresButton'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="fixed top-0 flex h-[104px] w-full items-center bg-background">
        <div className="m-auto flex w-[70%] items-center justify-between">
          <Image src={LogoCoffe} alt="Copo de café com grãos atras" />
          <div className="flex gap-3">
            <AddresButton address="Cajamar, SP" />
            <CartButton variant={false} value={2} />
          </div>
        </div>
      </header>
      <div className="h-[104px]"></div>

      <div className="min-h-screen bg-background">{children}</div>
    </>
  )
}
