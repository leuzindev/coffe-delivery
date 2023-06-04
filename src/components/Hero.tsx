'use client'

import { useMediaQuery } from 'react-responsive'

import Image from 'next/image'
import HeroImg from '../assets/Hero.png'

import { IconTextWidget } from './IconTextWidget'
import { FaShoppingCart, FaClock, FaCoffee } from 'react-icons/fa'
import { BsFillBoxSeamFill } from 'react-icons/bs'

export function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <div className="my-20 flex w-full flex-wrap items-center justify-between lg:my-0 lg:justify-center">
      <section className=" flex flex-col justify-evenly lg:w-[90%]">
        <div className="mb-10">
          <h1 className="mb-3 font-alt text-title-xl text-base-title lg:text-4xl">
            Encontre o café perfeito
            <br />
            para qualquer hora do dia
          </h1>
          <span className="text-text-l text-base-subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a
            {isMobile ? null : <br />}
            qualquer hora
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between sm:!w-[100%] lg:w-[90%]">
          <div className="space-y-2">
            <IconTextWidget
              icon={<FaShoppingCart className="text-base text-white" />}
              title="Compra simples e segura"
              color="bg-yellow-dark"
            />
            <IconTextWidget
              icon={<FaClock className="text-base text-white" />}
              title="Entrega rápida e rastreada"
              color="bg-yellow"
            />
          </div>
          <div className="space-y-2 sm:mt-2">
            <IconTextWidget
              icon={<BsFillBoxSeamFill className="text-base text-white" />}
              title="Embalagem mantém o café intacto"
              color="bg-base-text"
            />
            <IconTextWidget
              icon={<FaCoffee className="text-base text-white" />}
              title="O café chega fresquinho até você"
              color="bg-purple"
            />
          </div>
        </div>
      </section>
      <section>
        <Image
          src={HeroImg}
          width={476}
          height={360}
          alt="Imagem de um copo de café com graos atras"
          className="lg:mt-10"
        />
      </section>
    </div>
  )
}
