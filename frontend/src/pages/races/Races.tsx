import { Typography, CardContent, TextField } from "@mui/material";
import React, { ReactElement, useState } from "react";
import Button from "../../components/button";
import Wrapper from "../../components/wrapper";
import { Card } from "../characters"
import styles from "./Races.css";
import Edit from '@mui/icons-material/Edit';
import BgImg from "../../assets/races-bg.png";
import { useDropzone } from "react-dropzone";
import defaultProfile from "../../assets/user-profile-photo.jpg";

export default function Races() {
  const [count, setCount] = useState(1);
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
          Array(count).fill(1).map((_, index) => {
            return (
              <Cards description={<Typography style={styles.cardTxt}>
                Porte fisico medio-grande, minimo de 180cm e max 220cm, todos verdes/amarelados.<br /><br />Completamente imune a venenos. São uma raça de guerreiros bravos e loucos, recebem 01 de vantagem em testes de: Intimidar, Ameaçar, e Determinação.<br /><br />Não muito comuns.
              </Typography>}>

              </Cards>
              // <div key={index} style={styles.raceOutterContainer}>
              //   <div style={styles.raceInnerContainer}>
              //     <input {...getInputProps()} />
              //     <img
              //       alt="foto do personagem"
              //       src={filePath !== 'Imagemx.jpg' ? filePath : defaultProfile}
              //       width="100%"
              //       height="95%"
              //       onClick={open}
              //     />
              //   </div>
              //   <div style={styles.raceInnerContainer}>
              //     <Typography style={styles.cardTxt}>
              //       Porte fisico medio-grande, minimo de 180cm e max 220cm, todos verdes/amarelados.<br /><br />Completamente imune a venenos. São uma raça de guerreiros bravos e loucos, recebem 01 de vantagem em testes de: Intimidar, Ameaçar, e Determinação.<br /><br />Não muito comuns.
              //     </Typography>
              //   </div>
              // </div>
            )
          })
        }
      </div>

    </Wrapper>
  )
}

interface ICards {
  description: string | ReactElement;
  children?: any;
  editable?: boolean;
}

export function Cards(props: ICards) {
  const [filePath, setFilePath] = useState('Imagemx.jpg');
  const [isEditable, setIsEditable] = useState(false);
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
    <div onClick={() => setIsEditable(true)} style={styles.raceOutterContainer}>
      {
        !props.editable && !isEditable ? (
          <>
            <div style={styles.raceInnerContainer}>
              <img
                alt="foto do personagem"
                src={defaultProfile}
                width="100%"
                height="95%"
              />
            </div>
            <div style={styles.raceInnerContainer}>
              {props.description}
            </div>
          </>
        ) : (
          <>
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
              <TextField
                required
                id="description"
                label="Descrição"
                variant="standard"
                margin="normal"
                fullWidth
                multiline
              />
            </div>
          </>
        )
      }
      {/* <div style={styles.raceInnerContainer}>
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
        {props.description}
      </div> */}
      {props.children}
    </div>
  )
}