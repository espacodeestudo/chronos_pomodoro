import React from "react";
import styles from "./styles.module.css";

type GenericHtmlProps = {
  children: React.ReactNode;
};

function GenericHtml({ children }: GenericHtmlProps) {
  return (
    <React.Fragment>
      <div className={styles.genericHtml}>{children}</div>
    </React.Fragment>
  );
}

export { GenericHtml };
