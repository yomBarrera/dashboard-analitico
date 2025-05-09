"use client";
import { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Highcharts from "highcharts";
import { ContextApplication } from "@/context/application";

const HighchartsReact = dynamic(() => import("highcharts-react-official"), {
  ssr: false,
});

export const OrdersChart = () => {

  const [chart, setChart] = useState({});
  const { allOrders, loading, filteredOrders} = useContext(ContextApplication);

  useEffect(() => {
    const safeInit = (mod: any) => {
      try {
        if (typeof mod === "function") mod(Highcharts);
        else if (mod && typeof mod.default === "function")
          mod.default(Highcharts);
      } catch (e) {
        console.error("Error al inicializar módulo Highcharts:", e);
      }
    };

    if (typeof window !== "undefined") {
      Promise.all([
        import("highcharts/modules/exporting"),
        import("highcharts/modules/export-data"),
        import("highcharts/modules/accessibility"),
        import("highcharts/modules/offline-exporting"),
      ]).then(([exporting, exportData, accessibility, OfflineExporting]) => {
        safeInit(exporting);
        safeInit(exportData);
        safeInit(accessibility);
        safeInit(OfflineExporting);
      });
    }
  }, []);

  useEffect(() => {
    if (filteredOrders) ResolveChart();
  }, [filteredOrders]);

  const ResolveChart = () => {
    const monthlySales: Record<string, number[]> = {
      "2023": Array(12).fill(0),
      "2024": Array(12).fill(0),
    };

    filteredOrders.forEach((order) => {
      const date = new Date(order.date);
      const year = date.getFullYear().toString();
      const month = date.getMonth();

      if (year === "2023" || year === "2024") {
        monthlySales[year][month] += order.revenue;
      }
    });

    setChart({
      chart: {
        type: "line",
      },
      title: {
        text: "Comparación mensual de ventas: 2023 vs 2024",
      },
      accessibility: {
        description:
          "Gráfico de comparación de ventas mensuales entre 2023 y 2024.",
        enabled: true,
      },

      xAxis: {
        categories: [
          "Ene",
          "Feb",
          "Mar",
          "Abr",
          "May",
          "Jun",
          "Jul",
          "Ago",
          "Sep",
          "Oct",
          "Nov",
          "Dic",
        ],
        title: {
          text: "Meses",
        },
        accessibility: {
          description: "Meses del año",
        },
      },
      yAxis: {
        title: {
          text: "Número de ventas",
        },
        accessibility: {
          description: "cantidad de ingreso por mes",
        },
      },
      exporting: {
        enable: true,
      },
      series: [
        {
          name: "2023",
          data: monthlySales["2023"],
          color: '#ff5733',
          type: "line",
        },
        {
          name: "2024",
          data: monthlySales["2024"],
          type: "line",
        },
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 320,
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
              },
            },
          },
        ],
      },
    });
  };

  if (loading) return <p>Cargando datos...</p>;

  return (
      <HighchartsReact highcharts={Highcharts} options={chart} />
   );
};
