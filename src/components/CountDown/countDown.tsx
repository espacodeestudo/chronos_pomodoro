import React from "react";
import styles from "./styles.module.css";

function CountDown() {
  return (
    <React.Fragment>
      <div className={styles.co_wrapper}>
        <div className={styles.co_container}>
          <div className={styles.co_content}>00:00</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { CountDown };
