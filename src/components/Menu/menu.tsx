import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon } from "lucide-react";
import React from "react";

import styles from "./styles.module.css";

function Menu() {
  return (
    <React.Fragment>
      <header className={styles.me_wrapper}>
        <nav className={styles.me_container}>
          <div className={styles.me_content}>
            <ul className={styles.me_list}>
              <li>
                <a href="#" className={styles.me_link}>
                  <HouseIcon />
                </a>
              </li>
              <li>
                <a href="#" className={styles.me_link}>
                  <HistoryIcon />
                </a>
              </li>
              <li>
                <a href="#" className={styles.me_link}>
                  <SettingsIcon />
                </a>
              </li>
              <li>
                <a href="#" className={styles.me_link}>
                  <SunIcon />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
}

export { Menu };
