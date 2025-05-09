import { LineChartSeries, Order, OrdersFilters } from "@/types/order.interface";
import { createContext } from "react";

export interface ContextProps {
  selectedOrderId: string | null;
  selectedOrder: Order | null;
  setSelectedOrderId: (id: string | null) => void;
  filters: OrdersFilters;
  setFilters: (filters: OrdersFilters) => void;
  fetchOrders: () => void;
  getOrderById: () => void;
  loading: boolean;
  error: string | null;
  filteredOrders: Order[];
  paginatedOrders: Order[];
  loadMoreOrders: () => void;
  hasMoreOrders: boolean;
  metrics: {
    totalRevenue: number;
    totalOrders: number;
    totalTickets: number;
    uniqueCustomers: number;
  };
  allOrders: Order[];
  chartSeries: LineChartSeries[];
  setLastElementRef: (node: HTMLTableRowElement | null) => void;
  rol: string | null;
  changeRol: (rol:string)=> void;
}

export const ContextApplication = createContext({} as ContextProps);