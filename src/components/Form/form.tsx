import React from "react";

import { DefaultInput } from "../DafaulrInput";

import styles from "./styles.module.css";

function Form() {
  return (
    <React.Fragment>
      <div className={styles.fo_wrapper}>
        <div className={styles.fo_container}>
          <div className={styles.fo_content}>
            <form className={styles.fo_form}>
              <div className={styles.fo_formGroup}>
                <DefaultInput type="number" text="task" htmlFor="taskInput" />
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
