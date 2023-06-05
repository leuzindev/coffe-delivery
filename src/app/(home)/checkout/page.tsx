'use client'
import { ButtonSelect } from 'components/ButtonSelect'
import { CardConfirmBuy } from 'components/CardConfirmBuy'
import { IconLabel } from 'components/IconLabel'
import { InputForm } from 'components/InputForm'

import {
  FaCreditCard,
  FaMapMarkerAlt,
  FaMoneyBill,
  FaUniversity,
} from 'react-icons/fa'
import { MdAttachMoney } from 'react-icons/md'

export default function Checkout() {
  return (
    <div className="mt-10">
      <main className="flex flex-wrap-reverse gap-8">
        <section className=" xll:w-full">
          <h1 className="mb-[15px] font-alt text-title-xs text-base-subtitle">
            Complete seu pedido
          </h1>
          <div className=" min-h-[372px] w-[700px] rounded-lg bg-base-card p-10 xll:w-full">
            <form>
              <IconLabel
                icon={<FaMapMarkerAlt className="text-yellow-dark" size={15} />}
                title="Endereço de Entrega"
                subtitle="Informe o endereço onde deseja receber seu pedido"
              />
              <section className="space-y-4">
                <div>
                  <InputForm
                    placeholder="CEP"
                    type="text"
                    className="w-[200px]"
                  />
                </div>
                <div>
                  <InputForm placeholder="Rua" type="text" className="w-full" />
                </div>
                <div className="space-x-3 xll:space-x-0">
                  <InputForm
                    placeholder="Número"
                    type="text"
                    className="w-[200px] xll:mb-4"
                  />
                  <InputForm
                    placeholder="Complemento"
                    type="text"
                    className="w-[408px]"
                  />
                </div>
                <div className="space-x-3 xll:space-x-0">
                  <InputForm
                    placeholder="Bairro"
                    type="text"
                    className="w-[200px] xll:mb-4 "
                  />
                  <InputForm
                    placeholder="Cidade"
                    type="text"
                    className="w-[333px] xll:mb-4 "
                  />
                  <InputForm
                    placeholder="UF"
                    type="text"
                    className="w-[60px]"
                  />
                </div>
              </section>
            </form>
          </div>
          <div className="mt-3 flex min-h-[207px]  w-[700px] flex-col rounded-lg bg-base-card p-10 xll:w-full">
            <IconLabel
              icon={<MdAttachMoney className="text-purple" size={20} />}
              title="Pagamento"
              subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            />
            <div className="flex flex-wrap justify-center gap-3">
              <ButtonSelect
                icon={<FaCreditCard className="text-purple" />}
                label="Cartão de crédito"
              />
              <ButtonSelect
                icon={<FaUniversity className="text-purple" />}
                label="cartão de débito"
              />
              <ButtonSelect
                icon={<FaMoneyBill className="text-purple" />}
                label="dinheiro"
              />
            </div>
          </div>
        </section>
        <section className="xll:w-full">
          <CardConfirmBuy />
        </section>
      </main>
    </div>
  )
}
