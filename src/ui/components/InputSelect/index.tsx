import React from "react";

export const InputSelect = () => {
  return (
    <select className="form-select" id="basicSelect">
      <option disabled selected>Select Region</option>
      <option>LATAM</option> 
      <option>NA</option>
      <option>EMEA</option>
      <option>APAC</option>
    </select>
  );
};

