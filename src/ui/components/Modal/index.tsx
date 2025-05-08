import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import sc from "./modal.module.scss";

interface Props {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

const Modal = ({ onClose , title, children}: Props) => {
  
  const [domReady, setDomReady] = useState(false);
  
  const handleCloseClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onClose();
  };

  useEffect(() => {
    setDomReady(true);
  }, []);

  const modalContent = (
    <div className={sc["modal-overlay"]}>
      <div className={sc["modal-wrapper"]}>
        <div className={sc["modal"]}>
          <div className={sc["modal-header"]}>
            <i
              className={`${sc["icon"]} ${sc["icon-close"]}`}
              onClick={handleCloseClick}
            ></i>
          </div>
          <div className={sc["modal-body"]}>
            {title && <h4 className={sc["title_modal"]}>{title} </h4>}
            <div className={sc["modal_content"]}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const targetElement = domReady ? document.getElementById("modal-root") : null;

  return targetElement ? createPortal(modalContent, targetElement) : null;
}

export default Modal;
