import React, { FC } from 'react'
import { Header, Footer } from '@/ui/components'
import sc from '../styles/main.module.scss'

type Props = {
  children: React.ReactNode
}

const Main: FC <Props> = ({children}) => {
  return (
    <div className={sc.main}>
      <Header />
      <main className={sc.page}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Main