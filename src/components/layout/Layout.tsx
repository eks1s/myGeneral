import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../menu/Menu";
import styles from "./Layout.module.scss";

function Layout() {
  return (
    <>
      <header>
        <Menu />
      </header>

      <main>
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </main>

      <footer></footer>
    </>
  );
}

export default Layout;
