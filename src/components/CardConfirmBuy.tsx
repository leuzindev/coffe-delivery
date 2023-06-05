import Link from 'next/link'

import { CartItem } from './CartItem'

export function CardConfirmBuy() {
  return (
    <>
      <h1 className="mb-[15px] font-alt text-title-xs text-base-subtitle">
        Cafés selecionados
      </h1>
      <div className="w-[448px] rounded-bl-[36px]  rounded-br-md rounded-tl-md rounded-tr-[36px] bg-base-card p-10 xll:w-full">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <section className="mt-6 space-y-3">
          <div className="flex justify-between">
            <span className="text-text-s font-normal text-base-text">
              Total de itens
            </span>
            <span className="text-text-s font-normal text-base-text">
              R$ 29,70
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-s font-normal text-base-text">
              Entrega
            </span>
            <span className="text-text-s font-normal text-base-text">
              R$ 3,50
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-l font-bold text-base-subtitle">
              Total
            </span>
            <span className="text-text-l font-bold text-base-subtitle">
              R$ 33,20
            </span>
          </div>

          <Link href="/success">
            <button className="mt-4 h-[46px] w-full rounded-md bg-yellow text-button-g text-white transition-colors hover:bg-yellow-dark">
              CONFIRMAR PEDIDO
            </button>
          </Link>
        </section>
      </div>
    </>
  )
}
