import React from "react";
import Wrapper from "../../components/wrapper/Wrapper";
import { useParams } from 'react-router-dom';
import { CardContent, Typography, LinearProgress, Card as MUICard, Box, CardMedia, IconButton } from "@mui/material";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import defaultProfile from "../../assets/user-profile-photo.jpg";
import styles from "./Character.css"

export default function Character() {
  const params = useParams()

  return (
    <Wrapper paperComponent title={params.characterName?.toUpperCase()}>
      <CardContent style={styles.cardContent}>
        <img
          alt="foto do personagem"
          src={defaultProfile}
          width="25%"
        />

        <div style={styles.rightDiv}>
          <Typography>
            Idade: número
          </Typography>

          <Typography>
            Nível: número
          </Typography>

          <Typography>
            Raça: string
          </Typography>

          <Typography>
            Classe: string
          </Typography>

          <div style={styles.progressDiv}>
            <Typography>XP:</Typography>
            <LinearProgress
              style={styles.progress}
              variant={"determinate"}
              color={"primary"}
              value={50}
            />
            <Typography>50 / 100</Typography>
          </div>

          <div style={styles.progressDiv}>
            <Typography>Vida:</Typography>
            <LinearProgress
              style={styles.progress}
              variant={"determinate"}
              color={"primary"}
              value={90}
            />
            <Typography>90 / 100</Typography>
          </div>
        </div>
      </CardContent>
      <CardContent>
        <Typography variant="h5">Atributos</Typography>
        <div>
          <Card />
        </div>
      </CardContent>
    </Wrapper>
  )
}

function Card() {
  return (
    <MUICard sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">
            Físico
          </Typography>
          <Typography variant="h5">
            100
          </Typography>
        </CardContent>
      </Box>
      <Box style={{ width: "90%" }}>
        <CardContent>
          <Typography variant="h5">
            Resistência: 100
          </Typography>
          <Typography variant="h5">
            Agilidade: 100
          </Typography>
          <Typography variant="h5">
            Poder: 100
          </Typography>
        </CardContent>
      </Box>
    </MUICard>
  )
}