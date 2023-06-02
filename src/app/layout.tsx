import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex as Roboto, Baloo_2 as Baloo } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baloo = Baloo({ subsets: ['latin'], variable: '--font-baloo' })

export const metadata = {
  title: 'Coffee Delivery',
  description: 'Encontre o café perfeito para qualquer hora do dia',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baloo.variable}`}>{children}</body>
    </html>
  )
}
