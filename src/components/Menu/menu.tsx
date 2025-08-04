import { HouseIcon, HistoryIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

function Menu() {

  type AvailableThemes = "dark" | "light";
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const savedTheme = (localStorage.getItem("theme") as AvailableThemes) || "dark";
    return savedTheme 
  });

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  const nextIconTheme = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  console.log("Theme changed to:", theme);
  return (
    <React.Fragment>
      <header className={styles.me_wrapper}>
        <nav className={styles.me_container}>
          <div className={styles.me_content}>
            <ul className={styles.me_list}>
              <li>
                <Link
                  to="/"
                  className={styles.me_link}
                  aria-label="Home"
                  title="Home">
                  <HouseIcon />
                </Link>
              </li>
              <li>
                <Link
                  to="history"
                  className={styles.me_link}
                  aria-label="History"
                  title="History">
                  <HistoryIcon />
                </Link>
              </li>
              <li>
                <Link
                  to="settings"
                  className={styles.me_link}
                  aria-label="Configurações"
                  title="Configurações">
                  <SettingsIcon />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className={styles.me_link}
                  aria-label="Tema"
                  title="Tema"
                  onClick={handleThemeChange}>
                 {nextIconTheme[theme]}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
}

export { Menu };
