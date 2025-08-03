import React from "react";

import styles from "./styles.module.css";

function Cycles() {
  return (
    <React.Fragment>
      <div className={styles.cy_container}>
        <div className={styles.cy_content}>
          <span>Ciclos:</span>
          <div className={styles.cy_dots}>
            <span className={`${styles.cy_dot} ${styles.cy_workTime}`}></span>
            <span
              className={`${styles.cy_dot} ${styles.cy_shortBreakTime}`}></span>
            <span className={`${styles.cy_dot} ${styles.cy_workTime}`}></span>
            <span
              className={`${styles.cy_dot} ${styles.cy_shortBreakTime}`}></span>
            <span className={`${styles.cy_dot} ${styles.cy_workTime}`}></span>
            <span
              className={`${styles.cy_dot} ${styles.cy_shortBreakTime}`}></span>
            <span className={`${styles.cy_dot} ${styles.cy_workTime}`}></span>
            <span
              className={`${styles.cy_dot} ${styles.cy_longBreakTime}`}></span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Cycles };
