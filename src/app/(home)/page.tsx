'use client'
import { CoffeCard } from 'components/CoffeCard'
import { Hero } from '../../components/Hero'

import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { NextSeo } from 'next-seo'

export default function Home() {
  const coffes = useSelector((state: RootState) => state.coffe.coffes)

  return (
    <>
      <NextSeo title="Faça seu pedido | Coffe Delivery" />
      <div className="flex flex-wrap">
        <Hero />
        <main className="h-full min-h-full w-full mdd:mt-10 mdd:flex mdd:flex-col mdd:items-center mdd:justify-center">
          <h1 className="mb-14 font-alt text-title-l text-base-subtitle">
            Nossos cafés
          </h1>
          <div className="grid grid-cols-4 place-items-start gap-8 sm:!grid-cols-1 xl:grid-cols-3 mdd:grid-cols-2">
            {coffes.map((coffe) => (
              <CoffeCard
                key={coffe.id}
                id={coffe.id}
                coffeImg={coffe.image}
                name={coffe.name}
                categories={coffe.categories}
                description={coffe.descriptions}
                price={coffe.price}
                quantity={coffe.quantity}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}
