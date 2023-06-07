'use client'
import { FaMapMarkerAlt, FaStopwatch, FaDollarSign } from 'react-icons/fa'
import { IconTextWidget } from '../../../components/IconTextWidget'

import FinishSvg from '../../../assets/Finish.svg'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

export default function Success() {
  return (
    <>
      <NextSeo title="Compra finalizada | Coffe Delivery" />
      <main>
        <div className="flex flex-wrap items-center justify-between xl:justify-center">
          <section>
            <h1 className="mt-20 font-alt text-title-l text-yellow-dark mdd:mt-0">
              Uhu! Pedido confirmado
            </h1>
            <p className="mt-1 text-text-l text-base-subtitle">
              Agora é só aguardar que logo o café chegará até você
            </p>
            <div className="my-10 flex h-[270px] w-[526px] flex-col items-start gap-8 rounded-bl-[36px] rounded-br-lg rounded-tl-lg rounded-tr-[36px] border p-10 sm:border-none sm:p-0 sm:pt-7 md:my-5 md:w-full">
              <div className="flex">
                <IconTextWidget
                  color="bg-purple"
                  icon={<FaMapMarkerAlt className="bg-purple text-lg" />}
                  title={
                    <span>
                      Entrega em{' '}
                      <strong>Rua João Daniel Martinelli, 102 </strong>
                      Farrapos - Porto Alegre, RS
                    </span>
                  }
                />
              </div>

              <div className="flex">
                <IconTextWidget
                  color="bg-yellow"
                  icon={<FaStopwatch className="bg-yellow text-lg" />}
                  title={
                    <span>
                      Previsão de entrega <strong>20 min - 30 minm</strong>
                    </span>
                  }
                />
              </div>

              <div className="flex">
                <IconTextWidget
                  icon={<FaDollarSign className="bg-yellow-dark text-lg" />}
                  title={
                    <span>
                      Pagamento na entrega <strong>Cartão de Crédito</strong>
                    </span>
                  }
                  color="bg-yellow-dark "
                />
              </div>
            </div>
          </section>
          <Image
            src={FinishSvg}
            width={492}
            height={293}
            alt="Uma pessoa em uma moto roxa entregando uma caixa"
            className="mt-36 xl:mt-0"
          />
        </div>
      </main>
    </>
  )
}
