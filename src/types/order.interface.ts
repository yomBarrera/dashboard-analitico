export interface Order {
  orderId: string;
  date: string;
  region: string;
  customer: string;
  revenue: number;
  tickets: number;
}

export interface DateRange {
  start: string;
  end: string;
}

export interface OrdersFilters {
  region?: string;
  dateRange?: DateRange;
}


export interface LineChartSeries {
  name: string;
  data: number[];
}

export interface OrdersState {
  allOrders: Order[];
  selectedOrderId: string | null;
  selectedOrder: Order | null;
  filters: OrdersFilters;
  loading: boolean;
  error: string | null;
  rol:string | null;
}