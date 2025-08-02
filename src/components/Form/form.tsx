import React from "react";

import styles from "./styles.module.css";

function Form() {
  return (
    <React.Fragment>
      <div className={styles.fo_wrapper}>
        <div className={styles.fo_container}>
          <div className={styles.fo_content}>
            <form className={styles.fo_form}>
              <div className={styles.fo_formGroup}>
                <label className={styles.fo_label} htmlFor="taskForm">
                  Task
                </label>
                <input type="text" id="taskForm" />
              </div>
              <div className={styles.fo_formGroup}>
                <p>Lorem ipsum dolor sit amet!</p>
              </div>
              <div className={styles.fo_formGroup}>
                <p>Ciclos</p>
                <p>0 0 0 0 0 0 0</p>
              </div>

              <div className={styles.fo_formGroup}>
                <button>Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Form };
