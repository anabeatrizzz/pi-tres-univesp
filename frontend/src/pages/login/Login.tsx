import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import React from "react"
import Wrapper from "../../components/wrapper/Wrapper"
import { Card, CardActions, CardContent } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from "./Login.css";
import UserProfilePhoto from "../../assets/user-profile-photo.jpg";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { validationSchema, initialValues } from "../../formik/Login";
import colors from "../../components/colors";

export default function Login() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => { navigate("/") }
  })

  return (
    <Wrapper>
      <Paper style={styles.paper} square elevation={0}>
        <Typography gutterBottom variant="h4" style={styles.headingFour}>LOGIN</Typography>
        <Card sx={{ maxWidth: 590 }} style={styles.card}>
          <CardContent style={styles.cardContent}>
            <img style={{ width: "30%" }} src={UserProfilePhoto} alt="foto do personagem" />
            <form style={styles.divInputs} noValidate onSubmit={formik.handleSubmit}>
              <TextField
                margin="normal"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                required
                id="name"
                label="Nome"
                variant="standard"
              />

              <TextField
                margin="normal"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                type="email"
                required
                id="email"
                label="E-mail"
                variant="standard"
              />

              <TextField
                margin="normal"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                type="password"
                required
                id="password"
                label="Senha"
                variant="standard"
              />

              <CardActions style={styles.cardActions} disableSpacing>
                <Button type="submit" style={styles.loginBtn} variant="contained">
                  <Typography style={styles.loginTxt}>Entrar</Typography>
                </Button>
              </CardActions>
            </form>
          </CardContent>
        </Card>
      </Paper>
    </Wrapper>
  )
}