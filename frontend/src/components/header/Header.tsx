import React from "react";
import { Link, NavLink } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from "./Header.css"
import characterBackground from "../../assets/pictureGamer.png"
import rpgName from "../../assets/crescente20Rpg.png"
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

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
              <PopupState variant="popover">
                {
                  (popupState) => (
                    <>
                      <NavLink
                        style={styles.navLink}
                        to="#"
                        {...bindTrigger(popupState)}
                      >
                        SISTEMA
                      </NavLink>
                      <Menu {...bindMenu(popupState)}>
                        <PopupState variant="popover">
                          {
                            (popupState) => (
                              <>
                                <MenuItem
                                  style={styles.menuItem}
                                  {...bindTrigger(popupState)}
                                  divider
                                >
                                  Raças
                                </MenuItem>

                                <Menu {...bindMenu(popupState)}>
                                  <MenuItem
                                    style={styles.menuItem}
                                    onClick={popupState.close}
                                    divider
                                  >
                                    Raça 1
                                  </MenuItem>
                                </Menu>
                              </>
                            )
                          }
                        </PopupState>

                        <PopupState variant="popover">
                          {
                            (popupState) => (
                              <>
                                <MenuItem
                                  style={styles.menuItem}
                                  {...bindTrigger(popupState)}
                                  divider
                                >
                                  Classes
                                </MenuItem>

                                <Menu {...bindMenu(popupState)}>
                                  <MenuItem
                                    style={styles.menuItem}
                                    onClick={popupState.close}
                                    divider
                                  >
                                    Classe 1
                                  </MenuItem>
                                </Menu>
                              </>
                            )
                          }

                        </PopupState>

                        <MenuItem
                          divider
                          style={styles.menuItem}
                          onClick={popupState.close}
                        >
                          <NavLink
                            style={styles.subNavLink}
                            to="/skills"
                          >
                            Skills
                          </NavLink>
                        </MenuItem>

                        <MenuItem
                          divider
                          style={styles.menuItem}
                          onClick={popupState.close}>
                            <NavLink
                              style={styles.subNavLink}
                              to="/regras"
                            >
                              Regras
                            </NavLink>
                        </MenuItem>
                      </Menu>
                    </>

                  )
                }

              </PopupState>
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