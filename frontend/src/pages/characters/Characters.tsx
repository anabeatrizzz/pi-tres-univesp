import React from "react";
import { Card as MUICard, CardContent, Typography, CardMedia, CardActionArea } from "@mui/material";
import Wrapper from "../../components/wrapper/Wrapper";
import defaultPhoto from "../../assets/user-profile-photo.jpg"
import styles from "./Characters.css"
import { ROUTES } from "../../navigation/siteRoutes";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Characters() {
  const navigate = useNavigate();

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
                <Card characterName={`personagem${index + 1}`} />
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
                <Card characterName={`npc${index + 1}`} />
              </Link>
            )
          })
        }
      </div>
    </Wrapper>
  )
}

interface ICard {
  characterName: string;
  children?: any;
}

export function Card(props: ICard) {
  return (
    <MUICard sx={{ maxWidth: 150, marginBottom: 1, marginTop: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={defaultPhoto}
          alt="foto do personagem"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            {props.characterName}
          </Typography>
        </CardContent>
        {props.children}
      </CardActionArea>
    </MUICard>
  )
}