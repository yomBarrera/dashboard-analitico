import { useEffect, useMemo, useReducer, useState } from "react";
import { ContextApplication, Reducer } from "./";
import { Order, OrdersFilters, OrdersState } from "@/types/order.interface";

const INITIAL_STATE: OrdersState = {
  allOrders: [],
  selectedOrderId: null,
  selectedOrder: null,
  filters: {},
  loading: false,
  error: null,
  rol: 'admin'
};

export const ApplicationProvider = ({ children }:{children:React.ReactNode}) => {
  
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const [visibleCount, setVisibleCount] = useState(20);
  const [lastElementRef, setLastElementRef] = useState<HTMLTableRowElement | null>(null);

  const fetchOrders = async () => {
    dispatch({ type: "FETCH_ORDERS_START" });
    try {
      const res = await fetch("/api/orders");
      const data: Order[] = await res.json();
      dispatch({ type: "FETCH_ORDERS_SUCCESS", payload: data });
    } catch (err) {
      console.error(err);
      dispatch({ type: "FETCH_ORDERS_ERROR", payload: "Error al cargar las órdenes" });
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const setSelectedOrderId = (id: string | null) => dispatch({ type: "SET_SELECTED_ORDER_ID", payload: id });

  const getOrderById = async() => {
    dispatch({ type: "SET_SELECTED_ORDER", payload: state.allOrders.find(order => order.orderId === state.selectedOrderId) || null });
  }
  const setFilters = (filters: OrdersFilters) => {
    dispatch({ type: "SET_FILTERS", payload: filters });
    setVisibleCount(20); 
  };

  const filteredOrders = useMemo(() => {
    return state.allOrders.filter((order:Order) => {
      const regionMatch = !state.filters.region || order.region === state.filters.region;
      const dateMatch = !state.filters.dateRange || (
        new Date(order.date) >= new Date(state.filters.dateRange.start) &&
        new Date(order.date) <= new Date(state.filters.dateRange.end)
      );
      return regionMatch && dateMatch;
    });
  }, [state.allOrders, state.filters]);

  const paginatedOrders = useMemo(() => {
    return filteredOrders.slice(0, visibleCount);
  }, [filteredOrders, visibleCount]);
  
  const hasMoreOrders = useMemo(() => {
    return visibleCount < filteredOrders.length;
  }, [visibleCount, filteredOrders.length]);

  const loadMoreOrders = () => {
    if (hasMoreOrders) setVisibleCount(visible => visible + 20);
  };

  useEffect(() => {
    if (!lastElementRef || !hasMoreOrders) return;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        if (hasMoreOrders) setVisibleCount(visible => visible + 20);
      }
    });

    observer.observe(lastElementRef);
    return () => observer.disconnect();
  }, [lastElementRef, hasMoreOrders]);

  const metrics = useMemo(() => {
    const totalRevenue = filteredOrders.reduce((sum, order) => sum + order.revenue, 0);
    const totalOrders = filteredOrders.length;
    const totalTickets = filteredOrders.reduce((sum, order) => sum + order.tickets, 0);
    const uniqueCustomers = new Set(filteredOrders.map(o => o.customer)).size;
    return { totalRevenue, totalOrders, totalTickets, uniqueCustomers };
  }, [filteredOrders]);

  const chartSeries = useMemo(() => {
    const grouped: Record<string, number[]> = {};
    for (let m = 0; m < 12; m++) {
      const monthlyByYear: Record<string, number> = {};
      filteredOrders.forEach(order => {
        const d = new Date(order.date);
        if (d.getMonth() === m) {
          const y = String(d.getFullYear());
          monthlyByYear[y] = (monthlyByYear[y] || 0) + order.revenue;
        }
      });
      for (const year in monthlyByYear) {
        grouped[year] = grouped[year] || Array(12).fill(0);
        grouped[year][m] = monthlyByYear[year];
      }
    }
    return Object.entries(grouped).map(([year, data]) => ({ name: year, data }));
  }, [filteredOrders]);


  const changeRol = async (rol:string) => {
    dispatch({ type: "SET_SELECTED_ROL", payload: rol});
  }

  return (
    <ContextApplication.Provider value={{
      ...state,
      selectedOrderId: state.selectedOrderId,
      setSelectedOrderId,
      filters: state.filters,
      setFilters,
      fetchOrders,
      loading: state.loading,
      error: state.error,
      filteredOrders,
      paginatedOrders,
      loadMoreOrders,
      hasMoreOrders,
      metrics,
      chartSeries,
      setLastElementRef,
      getOrderById,
      changeRol
    }}>
      {children}
    </ContextApplication.Provider>
  );
};