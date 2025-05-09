import { useContext, useState } from "react";

import { ContextApplication } from "@/context/application";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import sc from "./datepicker.module.scss";

export const DateSelect = () => {

  const { setFilters, filters } = useContext(ContextApplication);

  const onChange = (dates): void => {
    const [start, end] = dates;

    setFilters({ ...filters, dateRange: { start, end } });

    console.log("Selected range:", start, end);
  };

  return (
    <DatePicker
      renderCustomHeader={({
        monthDate,
        customHeaderCount,
        decreaseMonth,
        increaseMonth,
      }) => (
        <div>
          <button
            aria-label="Previous Month"
            className="react-datepicker__navigation react-datepicker__navigation--previous"
            style={
              customHeaderCount === 1 ? { visibility: "hidden" } : undefined
            }
            onClick={decreaseMonth}
          >
            <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">
              {"<"}
            </span>
          </button>
          <span className="react-datepicker__current-month">
            {monthDate.toLocaleString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </span>
          <button
            aria-label="Next Month"
            className="react-datepicker__navigation react-datepicker__navigation--next"
            style={
              customHeaderCount === 0 ? { visibility: "hidden" } : undefined
            }
            onClick={increaseMonth}
          >
            <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--next">
              {">"}
            </span>
          </button>
        </div>
      )}
      selected={
        filters.dateRange?.start
          ? new Date(filters.dateRange.start)
          : new Date()
      }
      onChange={onChange}
      monthsShown={2}
      startDate={
        filters.dateRange?.start
          ? new Date(filters.dateRange.start)
          : new Date()
      }
      endDate={
        filters.dateRange?.end ? new Date(filters.dateRange.end) : new Date()
      }
      className={sc.custom_datepicker}
      placeholderText="Select a date range"
    />
  );
};
