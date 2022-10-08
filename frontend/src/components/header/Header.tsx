import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from "./Header.css"
import characterBackground from "../../assets/pictureGamer.png"
import rpgName from "../../assets/crescente20Rpg.png"
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { ROUTES } from "../../navigation/siteRoutes";

function setNavLinkActive(isActive: boolean) {
  if (!isActive) {
    return styles.navLink
  } else {
    return { ...styles.navLink, ...styles.navLinkActive }
  }
}

export default function Header() {
  const navigate = useNavigate();
  const [displayFirstImg, setDisplayFirstImg] = useState("initial")
  const [displaySecondImg, setDisplaySecondImg] = useState("initial")

  useEffect(() => {
    const listenToScroll = () => {
      let heightToHideFirstImageFrom = 10;
      let heightToHideSecondImageFrom = 50;

      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHideFirstImageFrom) {
        displayFirstImg === "initial" && setDisplayFirstImg("none");
      } else {
        setDisplayFirstImg("initial");
      }

      if (winScroll > heightToHideSecondImageFrom) {
        displaySecondImg === "initial" && setDisplaySecondImg("none");
      } else {
        setDisplaySecondImg("initial");
      }
    };

    window.addEventListener("scroll", listenToScroll);
    return () =>
      window.removeEventListener("scroll", listenToScroll);
  }, [])

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
              <PopupState disableAutoFocus popupId="mainSystemMenu" variant="popover">
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
                      <Menu disableScrollLock={true} {...bindMenu(popupState)}>
                        <PopupState disableAutoFocus popupId="mainRacesMenu" variant="popover">
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

                                <Menu anchorOrigin={{
                                  vertical: 'center',
                                  horizontal: 'right',
                                }}
                                  transformOrigin={{
                                    vertical: 'center',
                                    horizontal: 'left',
                                  }} {...bindMenu(popupState)}>
                                  {
                                    Array(3).fill(1).map((_, index) => {
                                      const linkTo = `/racas/raca${index + 1}`
                                      return (
                                        <Link style={styles.link} to={linkTo}>
                                          <MenuItem
                                            style={styles.menuItem}
                                            onClick={popupState.close}
                                            divider
                                          >
                                            Raça {index + 1}
                                          </MenuItem>
                                        </Link>
                                      )
                                    })
                                  }
                                </Menu>
                              </>
                            )
                          }
                        </PopupState>

                        <PopupState disableAutoFocus popupId="mainClassesMenu" variant="popover">
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

                                <Menu anchorOrigin={{
                                  vertical: 'center',
                                  horizontal: 'right',
                                }}
                                  transformOrigin={{
                                    vertical: 'center',
                                    horizontal: 'left',
                                  }} {...bindMenu(popupState)}>
                                  {
                                    Array(3).fill(1).map((_, index) => {
                                      const linkTo = `/classes/classe${index + 1}`
                                      return (
                                        <Link style={styles.link} to={linkTo}>
                                          <MenuItem
                                            style={styles.menuItem}
                                            onClick={popupState.close}
                                            divider
                                          >
                                            Classe {index + 1}
                                          </MenuItem>
                                        </Link>
                                      )
                                    })
                                  }
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
      <Link style={styles.characterBackgroundDiv} to={ROUTES.LOGIN}>
        <img
          src={characterBackground}
          style={{ ...styles.characterBackgroundImg, display: displaySecondImg, }}
          alt="imagem para fundo do personagem"
        />
      </Link>

      <Link style={styles.firstImgLink} to={ROUTES.ROOT}>
        <img
          src={rpgName}
          style={{ ...styles.firstImg, display: displayFirstImg }}
          alt="imagem com o nome do RPG Crescente vinte"
        />
      </Link>
    </>
  )
}