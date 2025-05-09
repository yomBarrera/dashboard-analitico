import Main from '@/ui/layouts/main'
import sc from './detail.module.scss'
import { useContext, useEffect } from 'react';
import { ContextApplication } from "@/context/application";
import { useRouter } from 'next/router';


const Order = () => {

  const router = useRouter();
  const { selectedOrderId, selectedOrder, getOrderById } = useContext(ContextApplication);

  useEffect(() => {
    if (!selectedOrderId) {
      console.log(selectedOrderId);
      router.push('/dashboard');
    } else {
      getOrderById()
    }
  }, [selectedOrderId]);

  return (
    <Main>
      <div className={sc.detail}>
        Order ID: {selectedOrderId ? selectedOrderId : 'No order selected'}
        <div className={sc.detail__data}>
          <h2>Order Details</h2>
          {selectedOrder ? (
            <div>
              <p><strong>Customer:</strong> {selectedOrder.customer}</p>
              <p><strong>Date:</strong> {selectedOrder.date}</p>
              <p><strong>Region:</strong> {selectedOrder.region}</p>
              <p><strong>Revenue:</strong> ${selectedOrder.revenue.toFixed(2)}</p>
              <p><strong>Tickets:</strong> {selectedOrder.tickets}</p>
            </div>
          ) : (
            <p>No order details available.</p>
          )}
        </div>
      </div>
    </Main>
  )
}

export default Order