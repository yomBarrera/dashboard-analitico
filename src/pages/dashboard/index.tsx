import { useContext } from "react";
import {
  InputSelect,
  DateSelect,
  Card,
  OrdersChart,
  OrdersTable,
} from "@/ui/components";

import Main from "@/ui/layouts/main";

import sc from "./dashboard.module.scss";
import { ContextApplication } from "@/context/application";
import Image from "next/image";

const Home = () => {

  const { rol, loading, metrics } = useContext(ContextApplication);
   
  return (
    <Main>
      {rol =='admin' &&
        <section className={sc.filters}>
          <div className={sc.filters__select}>
            <span>Región:</span>
            <InputSelect />
          </div>
          <div className={sc.filters__select}>
            <span>Date Range:</span>
            <DateSelect />
          </div>
        </section>
      }

      <section className={sc.card_list}>
        <Card category={"Ventas"} total={`$${(metrics.totalRevenue).toFixed(2)}`}>
          {loading ? <div className="">Cargando ...</div>:<Image src="ventas.svg" alt="ventas" width={24} height={24} />}
        </Card>
        <Card category={"Clientes"} total={`${metrics.uniqueCustomers}`}>
          <Image src="clientes.svg" alt="clientes" width={24} height={24} />
        </Card>
        <Card category={"Tikets Abiertos"} total={`${metrics.totalTickets}`}>
          <Image src="tickets.svg" alt="tickets abiertos" width={24} height={24} />
        </Card>
        <Card category={"Tasa de conversión"} total={`${( metrics.totalRevenue/metrics.totalOrders * 100).toFixed(1)}%`}>	
          <Image src="tasa.svg" alt="tasa de conversion" width={24} height={24} />
        </Card>
      </section>

      <section className={sc.charts}>
        <OrdersChart />
      </section>

      <section className={sc.table_data}>
        <h2>Orders Table</h2>
        <OrdersTable />
      </section>

    </Main>
  );
};

export default Home;
