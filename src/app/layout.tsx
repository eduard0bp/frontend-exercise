import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ModalProvider } from '@/components/ui/Modal/ModalProvider'
import './globals.css'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Star Wars Planets',
  description: 'Desenvolvido por Eduardo Batista Pereira'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ModalProvider>
        <body
          className={`${roboto.className} h-screen w-screen overflow-hidden bg-black`}
        >
          {children}
        </body>
      </ModalProvider>
    </html>
  )
}
