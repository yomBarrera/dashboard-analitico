import Main from '@/ui/layouts/main'
import { useRouter } from 'next/router'
import sc from './detail.module.scss'

const Order = () => {
  
  const router = useRouter()
  const { orderId } = router.query

  return (
    <Main>
      <div className={sc.detail}>
      Order ID: {orderId}
      </div>
    </Main>  
    )
}

export default Order