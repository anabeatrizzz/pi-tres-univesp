import React, { useState } from "react";
import { Typography } from "@mui/material";
import Wrapper from "../../components/wrapper/Wrapper";
import styles from "./Characters.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/editable-page";

export default function Characters() {
  return (
    <Wrapper paperComponent title="PERSONAGENS">
      <Typography variant="h4" fontFamily="Griffy">Comuns</Typography>
      <div style={styles.cardsDiv}>

        {
          Array(8).fill(1).map((_, index) => {
            let linkTo = `/personagens/personagem${index + 1}`
            return (
              <Link
                state={{
                  type: "character"
                }}
                style={styles.link}
                to={linkTo}
              >
                <Card attribute="character" attributeName={`personagem${index + 1}`} />
              </Link>
            )
          })
        }
      </div>

      <Typography variant="h4" fontFamily="Griffy">NPCs</Typography>
      <div style={styles.cardsDiv}>

        {
          Array(8).fill(1).map((_, index) => {
            let linkTo = `/personagens/npc${index + 1}`
            return (
              <Link
                state={{
                  type: "npc"
                }}
                style={styles.link}
                to={linkTo}
              >
                <Card attribute="npc" attributeName={`npc${index + 1}`} />
              </Link>
            )
          })
        }
      </div>
    </Wrapper>
  )
}

