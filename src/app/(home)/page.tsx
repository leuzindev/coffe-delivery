import { CoffeCard } from 'components/CoffeCard'
import { Hero } from '../../components/Hero'

export default function Home() {
  return (
    <div className="flex flex-wrap">
      <Hero />
      <main className="h-full min-h-full w-full mdd:mt-10 mdd:flex mdd:flex-col mdd:items-center mdd:justify-center">
        <h1 className="mb-14 font-alt text-title-l text-base-subtitle">
          Nossos cafés
        </h1>
        <div className="grid grid-cols-4 place-items-start gap-8 sm:!grid-cols-1 xl:grid-cols-3 mdd:grid-cols-2">
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
        </div>
      </main>
    </div>
  )
}
