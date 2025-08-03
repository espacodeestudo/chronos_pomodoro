import { PlayCircleIcon } from "lucide-react";

import React from "react";

import { Button } from "../Button";
import { Cycles } from "../Cycles";
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
                <DefaultInput
                  type="number"
                  text="task"
                  htmlFor="taskInput"
                  placeholder="task"
                />
              </div>
              <div className={styles.fo_formGroup}>
                <p>Lorem ipsum dolor sit amet!</p>
              </div>
              <div className={styles.fo_formGroup}>
                <Cycles />
              </div>

              <div className={styles.fo_formGroup}>
                <Button icon={<PlayCircleIcon />} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Form };
