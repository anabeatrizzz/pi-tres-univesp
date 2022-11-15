import { Typography, CardContent } from "@mui/material";
import React, { useState } from "react";
import Button from "../../components/button";
import Wrapper from "../../components/wrapper";
import { Card } from "../characters"
import styles from "./Races.css";
import Edit from '@mui/icons-material/Edit';
import BgImg from "../../assets/races-bg.png";
import { useDropzone } from "react-dropzone";
import defaultProfile from "../../assets/user-profile-photo.jpg";

export default function Races() {
  const [count, setCount] = useState(0);
  const [filePath, setFilePath] = useState('Imagemx.jpg')
  const { acceptedFiles, getRootProps, getInputProps, open } = useDropzone({
    accept: {
      'image/png': ['.png', '.jpg'],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFilePath(URL.createObjectURL(acceptedFiles[0]))
    }
  });

  return (
    <Wrapper paperComponent title="RAÇAS">
      <Button
        btntype="plus"
        onClick={() => { setCount(count + 1) }}
        title="Adicionar equipamento"
      />
      <div style={styles.racesContainer}>
        {
          Array(3).fill(1).map((_, index) => {
            return (
              <div key={index} style={styles.raceOutterContainer}>
                <div style={styles.raceInnerContainer}>
                  <input {...getInputProps()} />
                  <img
                    alt="foto do personagem"
                    src={filePath !== 'Imagemx.jpg' ? filePath : defaultProfile}
                    width="100%"
                    height="95%"
                    onClick={open}
                  />
                </div>
                <div style={styles.raceInnerContainer}>
                  <Typography style={styles.cardTxt}>
                    Porte fisico medio-grande, minimo de 180cm e max 220cm, todos verdes/amarelados.<br /><br />Completamente imune a venenos. São uma raça de guerreiros bravos e loucos, recebem 01 de vantagem em testes de: Intimidar, Ameaçar, e Determinação.<br /><br />Não muito comuns.
                  </Typography>
                </div>
              </div>
            )
          })
        }
      </div>

    </Wrapper>
  )
}