import React, { useState } from "react";
import { Card as MUICard, CardContent, Typography, CardMedia, CardActionArea, TextField } from "@mui/material";
import Wrapper from "../../components/wrapper/Wrapper";
import defaultPhoto from "../../assets/user-profile-photo.jpg"
import styles from "./Characters.css"
import { ROUTES } from "../../navigation/siteRoutes";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Edit } from "@mui/icons-material";
import Button from "../../components/button";
import { useDropzone } from "react-dropzone";
import defaultProfile from "../../assets/user-profile-photo.jpg";

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
  editable?: boolean;
}

export function Card(props: ICard) {
  const [isEditable, setIsEditable] = useState(false);
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
    <MUICard sx={{ maxWidth: 150, marginBottom: 1, marginTop: 1 }}>
      {
        !props.editable && !isEditable ? (
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

              <Typography variant="subtitle1" color="text.secondary" component="p">
                Descrição
              </Typography>
            </CardContent>
            <div onClick={() => setIsEditable(true)} style={styles.editIconDiv}>
              <Edit />
            </div>
          </CardActionArea>
        ) : (
          <CardActionArea>
            <input {...getInputProps()} />
            <CardMedia
              component="img"
              height="140"
              src={filePath !== 'Imagemx.jpg' ? filePath : defaultProfile}
              alt="foto do personagem"
              onClick={open}
            />
            <CardContent>
              <TextField
                required
                id="raceName"
                label="Nome da raça"
                variant="standard"
                margin="normal"
                fullWidth
              />

              <TextField
                required
                id="description"
                label="Descrição"
                variant="standard"
                margin="normal"
                fullWidth
              />

              {props.children}
            </CardContent>
          </CardActionArea>
        )
      }
    </MUICard>
  )
}