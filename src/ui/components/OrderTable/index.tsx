"use client";

import { useContext } from "react";

import { saveAs } from "file-saver";
import * as Papa from "papaparse";

import sc from "./ordersTable.module.scss";

import { ContextApplication } from "@/context/application";
import { useRouter } from 'next/router';

export const OrdersTable = () => {

  const router = useRouter();
  const {
    filteredOrders,
    loading,
    paginatedOrders,
    setLastElementRef,
    hasMoreOrders,
    setSelectedOrderId,
    rol
  } = useContext(ContextApplication);

  const downloadCSV = () => {
    const csv = Papa.unparse(filteredOrders);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "pedidos.csv");
  };

  const selectOrderId = (orderId: string) => {
    if(rol === 'admin'){
      setSelectedOrderId(orderId);
      router.push(`/detail/${orderId}`);
    }
  }
  
  if (loading) return <p className={sc.loading}>Cargando...</p>;

  return (
    <>
      <div className={sc.container}>
        <table className={sc.table}>
          <thead style={{ position: "sticky", top: 0 }}>
            <tr>
              <th>Order ID</th>
              <th>Fecha</th>
              <th>Región</th>
              <th>Empresa</th>
              <th>Ingreso</th>
              <th>Tickets</th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order) => (
              <tr key={order.orderId}>
                <td>
                  <div className={sc.link} onClick={() => selectOrderId(order.orderId)}>
                    {order.orderId}
                  </div>
                </td>
                <td>{order.date}</td>
                <td>{order.region}</td>
                <td>{order.customer}</td>
                <td>${order.revenue.toFixed(2)}</td>
                <td>{order.tickets}</td>
              </tr>
            ))}
          </tbody>
          {hasMoreOrders && (
            <tfoot>
              <tr ref={setLastElementRef}>
                <td colSpan={6}>Cargando más órdenes...</td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
      <button onClick={downloadCSV} className={sc.downloadButton}>
        Descargar CSV
      </button>
    </>
  );
};
