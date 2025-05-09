import { Order, OrdersFilters, OrdersState } from '@/types/order.interface';

type OrdersAction =
  | { type: "SET_SELECTED_ORDER_ID"; payload: string | null }
  | { type: "SET_SELECTED_ORDER"; payload: Order | null }
  | { type: "SET_FILTERS"; payload: OrdersFilters }
  | { type: "FETCH_ORDERS_START" }
  | { type: "FETCH_ORDERS_SUCCESS"; payload: Order[] }
  | { type: "FETCH_ORDERS_ERROR"; payload: string }
  | { type: "SET_SELECTED_ROL"; payload: string }

export function Reducer(state: OrdersState, action: OrdersAction): OrdersState {
  switch (action.type) {
    case "SET_SELECTED_ORDER_ID":
      return { ...state, selectedOrderId: action.payload };
    case "SET_SELECTED_ORDER":
      return { ...state, selectedOrder: action.payload };
    case "SET_FILTERS":
      return { ...state, filters: action.payload };
    case "FETCH_ORDERS_START":
      return { ...state, loading: true, error: null };
    case "FETCH_ORDERS_SUCCESS":
      return { ...state, allOrders: action.payload, loading: false };
    case "FETCH_ORDERS_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "SET_SELECTED_ROL":
      return { ...state, rol: action.payload };
    default:
      return state;
  }
}
  

