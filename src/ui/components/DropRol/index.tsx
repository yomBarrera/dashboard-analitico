import { useState } from "react";

import styles from './droprol.module.scss';

const DropRol = () => {
  
  const [rol, setRol] = useState("user");

  const changeRol =(newRol:string) => {
    setRol(newRol);  
  }
  
  return (
    <div className="btn-group mb-1">
      <div className={styles['dropdown']}>
        <button className="btn btn-primary dropdown-toggle me-1" type="button">
          Rol: {rol}
        </button>
        <div className={styles["dropdown-content"]} aria-label="dropdownMenuButton">
          <span className={styles["dropdown-item"]} onClick={() => changeRol('user')}>User</span>
          <span className={styles["dropdown-item"]} onClick={() => changeRol('admin')}>Admin</span>
        </div>
      </div>
    </div>
  );
};

export default DropRol;
