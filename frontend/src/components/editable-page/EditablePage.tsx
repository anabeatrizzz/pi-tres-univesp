import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "../button/Button";
import Wrapper from "../wrapper";
import styles from "./EditablePage.css";
import { Card as MUICard, CardContent, Typography, CardMedia, CardActionArea, TextField } from "@mui/material";
import defaultPhoto from "../../assets/user-profile-photo.jpg";
import { Edit } from "@mui/icons-material";

interface IEditablePage {
  pageTitle: string;
  attribute: string;
}

export default function EditablePage(props: IEditablePage){
  const [count, setCount] = useState(1);

  return (
    <Wrapper paperComponent title={props.pageTitle}>
      <Button
        btntype="plus"
        onClick={() => { setCount(count + 1) }}
        title={`Adicionar ${props.attribute}`}
      />
      <div style={styles.racesContainer}>
      {
          Array(count).fill(1).map((_, index) => {
            return (
              <Card attribute={props.attribute} attributeName="Meio Orc">
                <div style={styles.statsMinusAndPlus}>
                  <Button
                    btntype="minus"
                    title={`Excluir ${props.attribute}`}
                    onClick={() => { setCount(count - 1) }}
                  />

                  <Button
                    onClick={() => { }}
                    type="submit"
                    btntype="save"
                    title={`Salvar nova ${props.attribute}`}
                  />
                </div>
              </Card>
            )
          })
        }
        <Card attributeName="Meio Orc">
          <div style={styles.statsMinusAndPlus}>
            <Button
              btntype="minus"
              title={`Excluir ${props.attribute}`}
              onClick={() => { setCount(count - 1) }}
            />

            <Button
              onClick={() => { }}
              type="submit"
              btntype="save"
              title={`Salvar nova ${props.attribute}`}
            />
          </div>
        </Card>
      </div>

    </Wrapper>
  )
}

interface ICard {
  attributeName: string;
  attribute?: string;
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
                {props.attributeName}
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
              src={filePath !== 'Imagemx.jpg' ? filePath : defaultPhoto}
              alt="foto do personagem"
              onClick={open}
            />
            <CardContent>
              <TextField
                required
                id="attributeName"
                label={`Nome da ${props.attribute}`}
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