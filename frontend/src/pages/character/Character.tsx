import React, { useEffect } from "react";
import Wrapper from "../../components/wrapper/Wrapper";
import { Link, useParams } from 'react-router-dom';
import { CardContent, Typography, LinearProgress, Card as MUICard, Box, Button, Divider } from "@mui/material";
import defaultProfile from "../../assets/user-profile-photo.jpg";
import styles from "./Character.css"
import { ROUTES } from "../../navigation/siteRoutes";

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

  const equipament = [
    {
      part: "Bolsos",
      equipamentList: ["28 G", "29 G"]
    },
    {
      part: "Arma(s)",
      equipamentList: ["CAJADO+RUBI"]
    },
    {
      part: "Armadura",
      equipamentList: ["Armadura"]
    },
    {
      part: "Acessórios",
      equipamentList: ["Acessório 1", "Acessório 2"]
    },
    {
      part: "Roupa",
      equipamentList: ["PEÇA COMUM"]
    },
    {
      part: "Outros",
      equipamentList: ["Mochila"]
    },
  ]

  const phrases = [
    {
      name: "Personalidade",
      phrasesList: ["Eu estou sempre calmo, independente da situação. Eu nunca ergo minha voz ou deixo minhas emoções me controlarem.", "Eu abertamente digo o que outras pessoas apenas indicam."]
    },
    {
      name: "Ideais",
      phrasesList: ["Honestidade: Nossas ações devem vir de dentro e refletir quem nós realmente somos.", "Melhoramento Pessoal: O objetivo da vida é melhorar a si mesmo."]
    },
    {
      name: "Vínculo",
      phrasesList: ["Todas as pessoas da minha vila são meus irmãos e irmãs, e eu preciso defendê-los.", "Aqueles que lutam ao meu lado são aqueles dignos de morrer por."]
    },
    {
      name: "Valor",
      phrasesList: ["Eu tenho dificuldade em esconder minhas intenções verdadeiras. Minha língua afiada me causa problemas.", "Eu suspeito de estranhos e espero o pior deles."]
    }
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
              <div key={thing.name} style={styles.progressDiv}>
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
        <Typography fontFamily="Griffy" variant="h5">Frases</Typography>
        <div style={styles.statsDiv}>
          {
            phrases.map((phrase) => (
              <PhrasesCard
                key={phrase.name}
                name={phrase.name}
                phrasesList={phrase.phrasesList}
              />
            ))
          }
        </div>
      </CardContent>
      <CardContent>
        <Typography fontFamily="Griffy" variant="h5">Equipamentos</Typography>
        <div style={styles.statsDiv}>
          {
            equipament.map((equipament) => (
              <EquipamentCard key={equipament.part} part={equipament.part} equipamentList={equipament.equipamentList} />
            ))
          }
          
        </div>
        <div style={styles.createEquipmentDiv}>
          <Button variant="contained" style={styles.btn} size="small">
            <Link style={styles.link} to={ROUTES.CREATE_EQUIPMENT}>
              Criar equipamento
            </Link>
          </Button>
        </div>
      </CardContent>
      <CardContent>
        <Typography fontFamily="Griffy" variant="h5">Atributos</Typography>
        <div style={styles.statsDiv}>
          {
            stats.map((stat) => (
              <StatsCard key={stat.main} mainStat={stat.main} secondaryStats={stat.secondaries} />
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

interface IEquipamentCard {
  part: string;
  equipamentList: string[];
  width?: number;
}

interface IPhrasesCard {
  name: string;
  phrasesList: string[];
}

function StatsCard(props: ICard) {
  return (
    <MUICard style={{...styles.card, width: "40%"}}>
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
      <Divider orientation="vertical" />
      <Box>
      <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">
            Custo
          </Typography>
          <Typography variant="h5">
            1d6
          </Typography>
        </CardContent>
      </Box>
    </MUICard>
  )
}

function EquipamentCard(props: IEquipamentCard){
  return (
    <MUICard style={!props.width ? styles.card : {...styles.card, width: `${props.width}%`}}>
      <Box style={styles.cardBox}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">
            {props.part}
          </Typography>
        </CardContent>
      </Box>
      <Box>
        <CardContent>
          {
            props.equipamentList.map((equipament) => (
              <Typography key={equipament} variant="body2">
                {equipament}
              </Typography>
            ))
          }
        </CardContent>
      </Box>
    </MUICard>
  )
}

function PhrasesCard(props: IPhrasesCard){
  return(
    <EquipamentCard part={props.name} equipamentList={props.phrasesList} width={100} />
  )
}