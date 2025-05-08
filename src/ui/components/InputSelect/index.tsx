import { useEffect, useState } from "react";
import sc from "./select.module.scss";
import { Order } from "@/types/order.interface";


interface Props {
  orders: Order[];
  setOrdersRegion: (orders: Order[]) => void;
}
export const InputSelect = ({ orders, setOrdersRegion}: Props) => {
  const [selecValue, setSelecValue] = useState<string>("");

  const [filterOrders, setFilterOrders] = useState<Order[]>(orders);

  useEffect(() => {
    setOrdersRegion(filterOrders);
  }, [selecValue]);

  const regionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelecValue(e.target.value);
    const filteredOrders = orders.filter(
      (order) => order.region === e.target.value
    );
    setFilterOrders(filteredOrders);
  };

  return (
    <select
      className={sc.select_input}
      id="SelectRegion"
      name="SelectRegion"
      defaultValue={"-"}
      onChange={regionSelect}
    >
      <option value={"-"} className={sc.option} disabled>
        -- Select Region --
      </option>
      <option value={"LATAM"} className={sc.option}>
        Latin america
      </option>
      <option value={"NA"} className={sc.option}>
        North America
      </option>
      <option value={"EMEA"} className={sc.option}>
        Europe, Mid. East, Africa
      </option>
      <option value={"APAC"} className={sc.option}>
        Asia-Pacific
      </option>
    </select>
  );
};
