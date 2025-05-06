import React, { FC } from 'react'
import { Header, Footer } from '@/ui/components'
import '../styles/main.module.css'

type Props = {
  children: React.ReactNode
}

const Main: FC <Props> = ({children}) => {
  return (
    <div className='main'>
      <Header />
      <main className='page'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Main