import Main from '@/ui/layouts/main'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <Main>
      <h1>Dashboard</h1>
      <Link href="/detail/123">Order 123</Link>
    </Main>
  )
}

export default Home
