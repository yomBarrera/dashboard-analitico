"use client";

import { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import * as Papa from "papaparse";

import sc from "./ordersTable.module.scss";

import { Order } from "@/types/order.interface";

export const OrdersTable = () => {

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, []);

  const downloadCSV = () => {
    const csv = Papa.unparse(orders);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "pedidos.csv");
  };

  if (loading) return <p className={sc.loading}>Cargando...</p>;

  return (
    <div className={sc.container}>
      <button onClick={downloadCSV} className={sc.downloadButton}>Descargar CSV</button>
      <table className={sc.table}>
        <thead>
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
          {orders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.date}</td>
              <td>{order.region}</td>
              <td>{order.customer}</td>
              <td>${order.revenue.toFixed(2)}</td>
              <td>{order.tickets}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};