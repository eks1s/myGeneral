import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import { allRoutesArray } from "../../routes/routes";

import styles from "./Menu.module.scss";

function Menu() {
  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menuLeft}>LOGO</div>
      <div className={styles.menuCenter}>
        {allRoutesArray.map(({ to, name }) => {
          return (
            <NavLink
              to={to}
              key={name}
              className={({ isActive }) =>
                classNames(
                  isActive ? styles.activeLink : undefined,
                  styles.link
                )
              }
            >
              {name}
            </NavLink>
          );
        })}
      </div>
      <div className={styles.menuRight}>USER</div>
    </div>
  );
}

export default Menu;
