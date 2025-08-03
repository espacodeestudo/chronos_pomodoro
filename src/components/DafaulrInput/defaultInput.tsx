import React from "react";

import styles from "./styles.module.css";

interface DefaultInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  htmlFor: string;
}

function DefaultInput({ htmlFor, text, type, ...rest }: DefaultInputProps) {
  return (
    <React.Fragment>
      <div className={styles.de_wrapper}>
        <div className={styles.de_container}>
          <div className={styles.de_content}>
            <label className={styles.de_label} htmlFor={htmlFor}>
              {text}
            </label>
            <input
              type={type}
              id={htmlFor}
              className={styles.de_input}
              {...rest}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { DefaultInput };
