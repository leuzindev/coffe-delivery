import Link from 'next/link'

export default function Checkout() {
  return (
    <div>
      <button className="bg-red-300">
        <Link href="/success">SUCESS PAGE</Link>
      </button>
    </div>
  )
}
