import React from "react";

import styles from "./styles.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

function Button({ icon, ...props }: ButtonProps) {
  return (
    <React.Fragment>
      <button className={styles.btn} {...props}>
        {icon}
      </button>
    </React.Fragment>
  );
}

export { Button };
