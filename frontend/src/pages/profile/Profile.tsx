import Typography from "@mui/material/Typography"
import React from "react"
import Wrapper from "../../components/wrapper/Wrapper"
import { Button, Card, CardContent } from '@mui/material';
import styles from "./Profile.css";
import defaultProfile from "../../assets/user-profile-photo.jpg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../navigation/siteRoutes";
import { useDropzone } from 'react-dropzone';

export default function Profile() {
  return (
    <Wrapper paperComponent title="PERFIL">
      <Card sx={{ maxWidth: 590 }} style={styles.card}>
        <CardContent style={styles.cardContent}>
          <img alt="foto do personagem" src={defaultProfile} width="30%" />

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

            
              <Button size="small" type="submit" style={{...styles.btn, marginBottom: 10}} variant="contained">
                <Typography style={styles.btnTxt}>
                  <Link style={styles.link} to={ROUTES.CHARACTERS}>
                    Personagens
                  </Link>
                </Typography>
              </Button>
              <Button size="small" type="submit" style={styles.btn} variant="contained">
                <Typography style={styles.btnTxt}><Link style={styles.link} to={ROUTES.SUPPORT}>Suporte</Link></Typography>
              </Button>
            
          </div>
        </CardContent>
      </Card>
    </Wrapper>
  )
}