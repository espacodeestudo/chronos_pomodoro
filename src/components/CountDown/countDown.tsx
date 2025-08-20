import React from "react";
import { UseTakContext } from "../../hooks";

import styles from "./styles.module.css";

function CountDown() {
  const { state } = UseTakContext();
  return (
    <React.Fragment>
      <div className={styles.co_wrapper}>
        <div className={styles.co_container}>
          <div className={styles.co_content}>{ state.formattedSecondsRemaining}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { CountDown };
