import { useContext } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import sc from "./datepicker.module.scss";
import { ContextApplication } from "@/context/application";

type DateRange = [Date | null, Date | null];

export const DateSelect = () => {

  const { setFilters, filters } = useContext(ContextApplication);

  const onChange = (dates: DateRange) => {
    const [start, end] = dates;
    setFilters({ ...filters, dateRange: { start: start?.toISOString() ?? '', end: end?.toISOString() ?? '' } });
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
            className="react-datepicker_navigation react-datepicker_navigation--previous"
            style={customHeaderCount === 1 ? { visibility: "hidden" } : undefined}
            onClick={decreaseMonth}
          >
            <span
              className="react-datepicker_navigation-icon react-datepicker_navigation-icon--previous">
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
            className={
              "react-datepicker_navigation react-datepicker_navigation--next"
            }
            style={
              customHeaderCount === 0 ? { visibility: "hidden" } : undefined
            }
            onClick={increaseMonth}
          >
            <span
              className={
                "react-datepicker_navigation-icon react-datepicker_navigation-icon--next"
              }
            >
              {">"}
            </span>
          </button>
        </div>
      )}
      selected={filters.dateRange?.start ? new Date(filters.dateRange.start) : null}
      onChange={onChange}
      monthsShown={4}
      startDate={filters.dateRange?.start ? new Date(filters.dateRange.start) : null}
      endDate={filters.dateRange?.end ? new Date(filters.dateRange.end) : null}
      selectsRange
      className={sc.custom_datepicker}
      placeholderText="Select a Date range"
    />
  );
};