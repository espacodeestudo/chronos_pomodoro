import { TimerIcon } from "lucide-react";

import React from "react";

import styles from "./styles.module.css";

function Logo() {
  return (
    <React.Fragment>
      <div className={styles.lo_container}>
        <a href="#" className={styles.lo_link}>
          <TimerIcon />
          <span>Chronos</span>
        </a>
      </div>
    </React.Fragment>
  );
}

export { Logo };
