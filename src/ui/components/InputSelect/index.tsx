import { useContext } from "react";
import { ContextApplication } from "@/context/application";

import sc from "./select.module.scss";

export const InputSelect = () => {

  const { setFilters, filters } = useContext(ContextApplication);
  const regionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({...filters, region: e.target.value});

    console.log("Selected region:", e.target.value);
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
