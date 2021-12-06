import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import JobsContext from "../../store/JobsContext";
import styles from "./Modal.module.css";

const Modal = ({ btnType, children }) => {
  const jobsCtx = useContext(JobsContext);

  const [shouldShow, setShouldShow] = useState(false);
  const portal = document.getElementById("modal");

  useEffect(() => setShouldShow(true), []);

  const closeHandler = () => {
    setShouldShow(false);

    if (btnType === "edit") jobsCtx.showEditModalFunc(!jobsCtx.showEditModal);

    // if (btnType === "delete")
    //   jobsCtx.showDeleteModalFunc(!jobsCtx.showDeleteModal);
  };

  if (shouldShow) {
    return createPortal(
      <div className={styles["modal-background"]} onClick={closeHandler}>
        <div
          className={styles["modal-body"]}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className={styles["modal-close-button"]}
            onClick={closeHandler}
          >
            x
          </button>
          {children}
        </div>
      </div>,
      portal
    );
  } else {
    return null;
  }
};

export default Modal;
