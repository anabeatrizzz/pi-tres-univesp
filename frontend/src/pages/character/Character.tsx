import React, { useEffect } from "react";
import Wrapper from "../../components/wrapper/Wrapper";
import { useParams } from 'react-router-dom';
import { CardContent, Typography, LinearProgress, Card as MUICard, Box } from "@mui/material";
import defaultProfile from "../../assets/user-profile-photo.jpg";
import styles from "./Character.css"

export default function Character() {
  const params = useParams();

  const stats = [
    {
      main: "Físico",
      secondaries: ["Resistência", "Agilidade", "Poder"]
    },
    {
      main: "Mágico",
      secondaries: ["Alteração", "Elemental", "Entropia", "Psicocinese", "Movimento", "Clarevidência"]
    },
    {
      main: "Social",
      secondaries: ["Engano", "Persuasão", "Presença"]
    },
    {
      main: "Mental",
      secondaries: ["Aprendizagem", "Lógica", "Percepção", "Vontade"]
    },
    {
      main: "Alternativo",
      secondaries: ["Memória", "Fé", "Artes"]
    }
  ]

  const things = [
    {
      name: "Vida",
      amount: 10
    },
    {
      name: "XP",
      amount: 20
    },
    {
      name: "Energia",
      amount: 30
    },
    {
      name: "Defesa",
      amount: 40
    },
    {
      name: "Mentalidade",
      amount: 50
    },
    {
      name: "Corporal",
      amount: 60
    },
    {
      name: "Iniciativa",
      amount: 70
    },
    {
      name: "Armadura",
      amount: 80
    },
    {
      name: "Pontos de lenda",
      amount: 90
    },
  ]

  return (
    <Wrapper paperComponent title={params.characterName?.toUpperCase()}>
      <CardContent style={styles.cardContent}>
        <img
          alt="foto do personagem"
          src={defaultProfile}
          width="25%"
        />

        <div style={styles.rightDiv}>
          <div style={styles.particularsDiv}>
            <Typography variant="subtitle1">
              Idade: número
            </Typography>
            <Typography variant="subtitle1">
              Nível: número
            </Typography>
            <Typography variant="subtitle1">
              Raça: string
            </Typography>
            <Typography variant="subtitle1">
              Classe: string
            </Typography>
          </div>

          <div>
          {
            things.map((thing) => (
              <div style={styles.progressDiv}>
                <Typography variant="subtitle1">{thing.name}:</Typography>
                <LinearProgress
                  style={styles.progress}
                  variant={"determinate"}
                  color={"primary"}
                  value={thing.amount}
                />
                <Typography>{thing.amount} / 100</Typography>
              </div>
            ))
          }
          </div>
        </div>
      </CardContent>
      <CardContent>
        <Typography variant="h5">Atributos</Typography>
        <div style={styles.statsDiv}>
          {
            stats.map((stat) => (
              <Card mainStat={stat.main} secondaryStats={stat.secondaries} />
            ))
          }
        </div>
      </CardContent>
    </Wrapper>
  )
}

interface ICard {
  mainStat: string;
  secondaryStats: string[];
}

function Card(props: ICard) {
  return (
    <MUICard style={styles.card}>
      <Box style={styles.cardBox}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">
            {props.mainStat}
          </Typography>
          <Typography variant="h5">
            100
          </Typography>
        </CardContent>
      </Box>
      <Box>
        <CardContent>
          {
            props.secondaryStats.map((stat) => (
              <Typography key={stat} variant="body2">
                {stat}: 100
              </Typography>
            ))
          }
        </CardContent>
      </Box>
    </MUICard>
  )
}