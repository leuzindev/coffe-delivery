import { FaMapMarkerAlt, FaStopwatch, FaDollarSign } from 'react-icons/fa'
import { IconTextWidget } from '../../../components/IconTextWidget'
import FinishSvg from '../../../assets/Finish.svg'
import Image from 'next/image'

export default function Success() {
  return (
    <main>
      <div className="flex">
        <section className="w-1/2">
          <h1 className="mt-[80px] font-alt text-title-l text-yellow-dark ">
            Uhu! Pedido confirmado
          </h1>
          <p className="mt-[4px] font-body text-base-subtitle">
            Agora é só aguardar que logo o café chegará até você
          </p>
          <div className="my-10 flex h-[270px] w-[526px] flex-col items-start gap-8 rounded-bl-[36px] rounded-br-lg rounded-tl-lg rounded-tr-[36px] border border-gradient  p-10 md:w-full">
            <div className="flex">
              <IconTextWidget
                icon={<FaMapMarkerAlt className="bg-purple text-lg" />}
                title={
                  <>
                    Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
                    Farrapos - Porto Alegre, RS
                  </>
                }
                color="bg-purple "
              />
            </div>

            <div className="flex">
              <IconTextWidget
                icon={<FaStopwatch className="bg-yellow text-lg" />}
                title={
                  <>
                    Previsão de entrega <strong>20 min - 30 minm</strong>
                  </>
                }
                color="bg-yellow "
              />
            </div>

            <div className="flex">
              <IconTextWidget
                icon={<FaDollarSign className="bg-yellow-dark text-lg" />}
                title={
                  <>
                    Pagamento na entrega <strong>Cartão de Crédito</strong>
                  </>
                }
                color="bg-yellow-dark "
              />
            </div>
          </div>
        </section>
        <section className="flex w-1/2 items-center justify-center">
          <Image
            src={FinishSvg}
            width={492}
            height={293}
            alt="Imagem de um cara de entrega de moto"
            className="mt-36"
          />
        </section>
      </div>
    </main>
  )
}
