import React from "react";

import styles from "./styles.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Btncolor: "btn_green" | "btn_red";
  icon: React.ReactNode;
}

function Button({ Btncolor = "btn_green", icon, ...props }: ButtonProps) {
  return (
    <React.Fragment>
      <button className={`${styles.btn} ${styles[Btncolor]}`} {...props}>
        {icon}
      </button>
    </React.Fragment>
  );
}

export { Button };
