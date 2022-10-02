import React from "react";
import { Link, NavLink } from "react-router-dom";
import colors from "../colors";
import styles from "./Header.css"
import characterBackground from "../../assets/pictureGamer.png"
import rpgName from "../../assets/crescente20Rpg.png"

function setNavLinkActive(isActive: boolean) {
  if (!isActive) {
    return styles.navLink
  } else {
    return { ...styles.navLink, ...styles.navLinkActive }
  }
}

export default function Header() {
  return (
    <>

      <header style={styles.header}>

        <nav>
          <div style={styles.navDiv}>
            <ul style={styles.ul}>
              <NavLink
                style={({ isActive }) => setNavLinkActive(isActive)}
                to="/"
              >
                INÍCIO
              </NavLink>
              <NavLink
                style={({ isActive }) => setNavLinkActive(isActive)}
                to="/sistema"
              >
                SISTEMA
              </NavLink>
              <NavLink
                style={({ isActive }) => setNavLinkActive(isActive)}
                to="/lore"
              >
                LORE
              </NavLink>
              <NavLink
                style={({ isActive }) => setNavLinkActive(isActive)}
                to="/jogo"
              >
                JOGO
              </NavLink>
            </ul>
          </div>
        </nav>

      </header>
      <Link style={styles.characterBackgroundDiv} to="/link">
        <img
          src={characterBackground}
          style={styles.characterBackgroundImg}
          alt="imagem para fundo do personagem"
        />
      </Link>

      <Link style={{ justifyContent: "flex-start", display: "flex" }} to="/">
        <img
          src={rpgName}
          style={{
            width: "30%",
            zIndex: 2,
            position: "fixed" as "fixed",
            top: 0
          }}
          alt="imagem com o nome do RPG Crescente vinte"
        />
      </Link>
    </>
  )
}