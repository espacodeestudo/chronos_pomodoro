import React from "react";

import styles from "./styles.module.css";

interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <React.Fragment>
      <section className={styles.co_wapper}>
        <main className={styles.co_container}>
          <div className={styles.co_content}>{children}</div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Container };
