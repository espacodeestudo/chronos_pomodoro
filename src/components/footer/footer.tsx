import React from "react";

import styles from "./styles.module.css";

function Footer() {
  return (
    <React.Fragment>
      <footer className={styles.fo_wrapper}>
        <div className={styles.fo_container}>
          <ul className={styles.fo_content}>
            <li>
              <a href="#" className={styles.fo_link}>
                Entenda como fumciona tecnica do pomodoro
              </a>
            </li>
            <li>
              <a href="#" className={styles.fo_link}>
                Chronos Pomodoro &copy; {new Date().getFullYear()}
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </React.Fragment>
  );
}

export { Footer };
