import { FaMapMarkerAlt } from 'react-icons/fa'
export default function Success() {
  return (
    <main>
      <h1 className="mt-[80px] font-alt text-title-l text-yellow-dark ">
        Uhu! Pedido confirmado
      </h1>
      <p className="mt-[4px] font-body text-text-l text-base-subtitle">
        Agora é só aguardar que logo o café chegará até você
      </p>
      <div className="my-10 flex h-[270px] w-[526px] flex-col items-start gap-8 rounded-bl-[36px] rounded-br-lg rounded-tl-lg rounded-tr-[36px] border p-10">
        <div className="flex">
          <span className="flex h-[32px] w-[32px] items-center justify-center rounded-[1000px] bg-purple p-2">
            <FaMapMarkerAlt className="bg-purple text-lg" />
          </span>
          <p className="px-3 font-body text-text-m">
            Entrega em Rua <strong>João Daniel Martinelli, 102</strong>
            <br />
            Farrapos - Porto Alegre, RS
          </p>
        </div>

        <div className="flex">
          <span className="flex h-[32px] w-[32px] items-center justify-center rounded-[1000px] bg-purple p-2">
            <FaMapMarkerAlt className="bg-purple text-lg" />
          </span>
          <p className="px-3 font-body text-text-m">
            Previsão de entrega
            <br />
            <strong>20 min - 30 min</strong>
          </p>
        </div>

        <div className="flex">
          <span className="flex h-[32px] w-[32px] items-center justify-center rounded-[1000px] bg-purple p-2">
            <FaMapMarkerAlt className="bg-purple text-lg" />
          </span>
          <p className="px-3 font-body text-text-m">
            Pagamento na entrega
            <br />
            <strong>Cartão de Crédito </strong>
          </p>
        </div>
      </div>
    </main>
  )
}
