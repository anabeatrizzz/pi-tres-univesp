import Typography from "@mui/material/Typography"
import React from "react"
import Wrapper from "../../components/wrapper/Wrapper"
import { Card, CardActions, CardContent } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from "./Login.css";
import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import { validationSchema, initialValues } from "../../formik/Login";
import { ROUTES } from "../../navigation/siteRoutes";
import UserProfilePhoto from "../../assets/user-profile-photo.jpg"

export default function Login() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => { navigate("/") }
  })

  return (
    <Wrapper paperComponent title="LOGIN">
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

            <Typography mt={3}>
              Não possui uma conta? Faça seu <Link style={styles.link} to={ROUTES.SIGNUP}>cadastro</Link>
            </Typography>
          </form>

        </CardContent>
      </Card>
    </Wrapper>
  )
}