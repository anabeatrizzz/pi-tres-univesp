import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.css"

export default function Header(){
  return(
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div style={styles.navDiv}>
          <ul style={styles.ul}>
            <NavLink style={styles.navLink} to="/">
              <li style={styles.li}>
                INÍCIO
              </li>
            </NavLink>
            <NavLink style={styles.navLink} to="/sistema">
              <li style={styles.li}>
                SISTEMA
              </li>
            </NavLink>
            <NavLink style={styles.navLink} to="/lore">
              <li style={styles.li}>
                LORE
              </li>
            </NavLink>
            <NavLink style={styles.navLink} to="/jogo">
              <li style={styles.li}>
                JOGO
              </li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  )
}