import { useState } from "react";
import sc from "./droprol.module.scss";

const DropRol = () => {
  
  const [rol, setRol] = useState("user");

  return (
    <div className="btn-group mb-1">
      <div className={sc.dropdown}>
        <button className="btn btn-primary dropdown-toggle me-1" type="button">
          Change Rol
        </button>
        <div className={sc["dropdown-content"]} aria-label="dropdownMenuButton">
          <span className={sc["dropdown-item"]} onClick={()=>setRol('user')}>User</span>
          <span className={sc["dropdown-item"]} onClick={()=>setRol('Admin')}>Admin</span>
        </div>
      </div>
    </div>
  );
};

export default DropRol;
