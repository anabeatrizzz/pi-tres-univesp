import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import React from "react"
import Wrapper from "../../components/wrapper/Wrapper"
import { Card, CardActions, CardContent } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from "./Login.css";
import UserProfilePhoto from "../../assets/user-profile-photo.jpg"

export default function Login() {
  return (
    <Wrapper>
      <Paper style={styles.paper} square elevation={0}>
        <Typography gutterBottom variant="h4" style={styles.headingFour}>LOGIN</Typography>
        <Card sx={{ maxWidth: 590 }} style={styles.card}>
          <CardContent style={styles.cardContent}>
            <img style={{ width: "30%" }} src={UserProfilePhoto} alt="foto do personagem" />

            <div style={styles.divInputs}>
              <TextField required id="name" label="Nome" variant="standard" />

              <TextField required id="email" label="E-mail" variant="standard" />

              <TextField required id="password" label="Senha" variant="standard" />
            </div>
          </CardContent>
          <CardActions style={styles.cardActions} disableSpacing>
            <Button style={styles.loginBtn} variant="contained">
              <Typography style={styles.loginTxt}>Entrar</Typography>
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </Wrapper>
  )
}