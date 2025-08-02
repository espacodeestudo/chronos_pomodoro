import React from "react";

import styles from "./styles.module.css";

interface HeadingProps {
  text: string;
  icon?: React.ReactNode;
}

function Heading({ text, icon }: HeadingProps) {
  return (
    <React.Fragment>
      <div className={styles.h_wrapper}>
        <h1>{text}</h1>
        {icon && <span className="icon">{icon}</span>}
      </div>
    </React.Fragment>
  );
}

export { Heading };
