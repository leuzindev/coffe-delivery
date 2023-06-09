import LogoCoffe from '../../assets/LogoCoffeDelivery.svg'
import Image from 'next/image'

import { ReactNode } from 'react'

import { CartButton } from '../../components/CartButton'
import { AddresButton } from '../../components/AddresButton'

import Link from 'next/link'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <header className="fixed top-0 flex h-[104px]  w-full max-w-[74rem] items-center bg-background">
        <div className="m-auto flex  w-full items-center justify-between xl:w-[90%] ">
          <Link href="/">
            <Image src={LogoCoffe} alt="Copo de café com grãos atras" />
          </Link>
          <div className="flex gap-3">
            <AddresButton address="Cajamar, SP" />
            <Link href="/checkout">
              <CartButton />
            </Link>
          </div>
        </div>
      </header>
      <div className="h-[104px] "></div>

      <div className="m-auto min-h-screen w-full max-w-[74rem] bg-background xl:p-10">
        {children}
      </div>
    </div>
  )
}
