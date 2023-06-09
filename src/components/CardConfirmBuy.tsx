import Link from 'next/link'
import Image from 'next/image'

import EmptyCart from '../assets/EmptyCart.svg'

import { CartItem } from './CartItem'

import { Coffe } from 'interfaces/Coffe'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

import { humanizeValue } from 'utils/humanizeValue'

export function CardConfirmBuy() {
  const cartItems = useSelector((state: RootState) => state.coffe.cart)

  const cartTotal = cartItems.reduce((total, item) => {
    return total + (item.total || 0)
  }, 0)

  const shippingCosts = 3.5

  return (
    <>
      <h1 className="mb-[15px] font-alt text-title-xs text-base-subtitle">
        Cafés selecionados
      </h1>
      <div className="w-[448px] rounded-bl-[36px]  rounded-br-md rounded-tl-md rounded-tr-[36px] bg-base-card p-10 xll:w-full">
        {cartItems.map((item: Coffe) => (
          <CartItem
            key={item.id}
            coffeId={item.id}
            image={item.image}
            price={item.price}
            amount={item.quantity}
            label={item.name}
          />
        ))}
        {cartItems.length === 0 ? (
          <div className="flex w-full flex-col items-center justify-center space-y-3">
            <span className="text-text-s text-base-subtitle">
              Carrinho vazio
            </span>
            <Image
              src={EmptyCart}
              alt="uma mulher fazendo compras na internet"
              width={250}
              height={208}
            />
            <Link href="/" className="w-full">
              <button className="mt-5 h-[46px] w-full rounded-md bg-yellow text-button-g text-white transition-colors hover:bg-yellow-dark">
                Selecionar cafes
              </button>
            </Link>
          </div>
        ) : (
          <section className="mt-6 space-y-3">
            <div className="flex justify-between">
              <span className="text-text-s font-normal text-base-text">
                Total de itens
              </span>
              <span className="text-text-s font-normal text-base-text">
                R$ {humanizeValue(cartTotal)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-s font-normal text-base-text">
                Entrega
              </span>
              <span className="text-text-s font-normal text-base-text">
                R$ {humanizeValue(shippingCosts)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-l font-bold text-base-subtitle">
                Total
              </span>
              <span className="text-text-l font-bold text-base-subtitle">
                R$ {humanizeValue(cartTotal + shippingCosts)}
              </span>
            </div>
            <Link href="/success">
              <button className="mt-4 h-[46px] w-full rounded-md bg-yellow text-button-g text-white transition-colors hover:bg-yellow-dark">
                CONFIRMAR PEDIDO
              </button>
            </Link>
          </section>
        )}
      </div>
    </>
  )
}
