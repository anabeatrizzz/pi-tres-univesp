import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "../button/Button";
import Wrapper from "../wrapper";
import styles from "./EditablePage.css";
import { Card as MUICard, CardContent, Typography, CardMedia, CardActionArea, TextField } from "@mui/material";
import defaultPhoto from "../../assets/user-profile-photo.jpg";
import { Edit } from "@mui/icons-material";
import { postClass } from "../../services/classes";
import { useFormik } from 'formik';
import { validationSchema, initialValues } from "../../formik/Classes";
import { Link } from "react-router-dom";

interface IEditablePage {
  pageTitle: string;
  attribute: string;
  postEndpoint?: Function;
  wrapper?: boolean;
  children?: any;
}

export default function EditablePage(props: IEditablePage) {
  const [count, setCount] = useState(2);

  if (props.wrapper) {
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
                <Card postEndpoint={props.postEndpoint} key={index} attribute={props.attribute} attributeName="Meio Orc" />
              )
            })
          }
        </div>
        {props.children}
      </Wrapper>
    )
  } else {
    return (
      <>
        <Button
          btntype="plus"
          onClick={() => { setCount(count + 1) }}
          title={`Adicionar ${props.attribute}`}
        />
        <div style={styles.racesContainer}>
          {
            Array(count).fill(1).map((_, index) => {
              if (props.attribute === "personagem" || props.attribute === "npc") {
                let linkTo = props.attribute === "personagem" ? `/personagens/personagem${index + 1}` : `/personagens/npc${index + 1}`
                return (
                  <Link
                    state={{
                      type: props.attribute === "personagem" ? "character" : "npc"
                    }}
                    style={styles.link}
                    to={linkTo}
                  >
                    <Card attribute={props.attribute} attributeName={`${props.attribute}${index + 1}`} />
                  </Link>
                )
              } else {
                return (
                  <Card postEndpoint={props.postEndpoint} key={index} attribute={props.attribute} attributeName="Meio Orc" />
                )
              }

            })
          }
        </div>
        {props.children}
      </>
    )
  }

  // return (
  //   <Wrapper paperComponent title={props.pageTitle}>
  //     <Button
  //       btntype="plus"
  //       onClick={() => { setCount(count + 1) }}
  //       title={`Adicionar ${props.attribute}`}
  //     />
  //     <div style={styles.racesContainer}>
  //       {
  //         Array(count).fill(1).map((_, index) => {
  //           return (
  //             <Card postEndpoint={props.postEndpoint} key={index} attribute={props.attribute} attributeName="Meio Orc" />
  //           )
  //         })
  //       }
  //     </div>
  //   </Wrapper>
  // )
}

EditablePage.defaultProps = {
  wrapper: true
}

interface ICard {
  attributeName: string;
  attribute: string;
  children?: any;
  editable?: boolean;
  postEndpoint?: Function;
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
  const formik = useFormik({
    initialValues: {
      ...initialValues,
      img: filePath
    },
    validationSchema,
    onSubmit: () => { console.log(formik.values) }
  })

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

              {
                props.attribute !== "personagem" && props.attribute !== "npc" ? (
                  <Typography variant="subtitle1" color="text.secondary" component="p">
                    Descrição
                  </Typography>
                ) : (
                  <></>
                )
              }
            </CardContent>
            {
              props.attribute !== "personagem" && props.attribute !== "npc" ? (
                <div onClick={() => setIsEditable(true)} style={styles.editIconDiv}>
                  <Edit />
                </div>
              ) : (
                <></>
              )
            }

          </CardActionArea>
        ) : (
          <form noValidate onSubmit={formik.handleSubmit}>
            <CardActionArea>
              <input
                {...getInputProps()}
              />
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
                  id="name"
                  label={`Nome ${props.attribute}`}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                  required
                  id="description"
                  label="Descrição"
                  variant="standard"
                  margin="normal"
                  fullWidth
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  error={formik.touched.description && Boolean(formik.errors.description)}
                  helperText={formik.touched.description && formik.errors.description}
                />
                <div style={styles.statsMinusAndPlus}>
                  <Button
                    btntype="minus"
                    title={`Excluir ${props.attribute}`}
                    onClick={() => { }}
                  />
                  <Button
                    onClick={() => {
                      if (props.postEndpoint) {
                        props.postEndpoint({
                          nome: formik.values.name,
                          descricao: formik.values.description
                        })
                      }
                    }}
                    type="submit"
                    btntype="save"
                    title={`Salvar ${props.attribute}`}
                  />
                </div>
                {props.children}
              </CardContent>
            </CardActionArea>
          </form>
        )
      }
    </MUICard>
  )
}