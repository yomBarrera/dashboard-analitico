import { useContext } from "react";

import styles from './droprol.module.scss';
import { ContextApplication } from "@/context/application";
import { useRouter } from "next/router";

const DropRol = () => {

  const router=useRouter()
  const { rol, changeRol } = useContext(ContextApplication)
  
  const changeRole = (newRol: string) => {
    changeRol(newRol)
    if (newRol ==='user'&& router.pathname !== '/dashboard' ) router.push('/dashboard')
  }

  return (
    <div className="">
      <div className={styles['dropdown']}>
        <button className="btn btn-primary dropdown-toggle me-1" type="button">
          Rol: {rol == 'admin' ? 'Admin' : 'User'}
        </button>
        <div className={styles["dropdown-content"]} aria-label="dropdownMenuButton">
          <span className={rol == 'user' ? `${styles["dropdown-item"]} ${styles.selected}` : `${styles["dropdown-item"]}`} onClick={() => changeRole('user')}>User</span>
          <span className={rol == 'admin' ? `${styles["dropdown-item"]} ${styles.selected}` : `${styles["dropdown-item"]}`} onClick={() => changeRole('admin')}>Admin</span>
        </div>
      </div>
    </div>
  );
};

export default DropRol;
