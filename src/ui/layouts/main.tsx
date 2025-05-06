import React, { FC } from 'react'
import { Header, Footer } from '@/ui/components'

type Props = {
  children: React.ReactNode
}

const Main: FC <Props> = ({children}) => {
  return (
    <div className='Main'>
      <Header />
      <main className='Page'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Main