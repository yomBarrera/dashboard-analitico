import Main from '@/ui/layouts/main'
import { useRouter } from 'next/router'
import React from 'react'

const Order = () => {
  
  const router = useRouter()
  const { orderId } = router.query

  return (
    <Main>
      Order ID: {orderId}
    </Main>  
    )
}

export default Order