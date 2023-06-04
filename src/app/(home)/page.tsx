import { CoffeCard } from 'components/CoffeCard'
import { Hero } from '../../components/Hero'

export default function Home() {
  return (
    <div className="flex flex-wrap">
      <Hero />
      <main className="h-full min-h-full w-full">
        <h1 className="mb-14 font-alt text-title-l text-base-subtitle">
          Nossos cafés
        </h1>
        <div className="flex  justify-between">
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
          <CoffeCard />
        </div>
      </main>
    </div>
  )
}
