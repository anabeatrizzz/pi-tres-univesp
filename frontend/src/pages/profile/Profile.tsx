import Typography from "@mui/material/Typography"
import React, { useEffect, useState } from "react"
import Wrapper from "../../components/wrapper/Wrapper"
import { Button, Card, CardContent } from '@mui/material';
import styles from "./Profile.css";
import defaultProfile from "../../assets/user-profile-photo.jpg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../navigation/siteRoutes";
import { useDropzone } from 'react-dropzone';

export default function Profile() {
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
    <Wrapper paperComponent title="PERFIL">
      <Card sx={{ maxWidth: 590 }} style={styles.card}>
        <CardContent style={styles.cardContent}>
          <input {...getInputProps()} />
          <img
            alt="foto do personagem"
            src={filePath !== 'Imagemx.jpg' ? filePath : defaultProfile}
            width="45%"
            onClick={open}
          />

          <div style={styles.div}>
            <Typography variant="h6" gutterBottom>
              Nome:
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Murilo
            </Typography>
            <Typography variant="h6" gutterBottom>
              E-mail:
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              murilo@murilo.com
            </Typography>

            <Button size="small" style={{ ...styles.btn, marginBottom: 10 }} variant="contained">
              <Typography style={styles.btnTxt}>
                <Link style={styles.link} to={ROUTES.CHARACTERS}>
                  Personagens
                </Link>
              </Typography>
            </Button>
            <Button size="small" style={styles.btn} variant="contained">
              <Typography style={styles.btnTxt}>
                <Link style={styles.link} to={ROUTES.SUPPORT}>
                  Suporte
                </Link>
              </Typography>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Wrapper>
  )
}