import React from "react";

const InputSelect = () => {
  return (
    <select className="form-select" id="basicSelect">
      <option disabled selected>Change Region</option>
      <option>LATAM</option>
      <option>EUR</option>
    </select>
  );
};

export default InputSelect;
