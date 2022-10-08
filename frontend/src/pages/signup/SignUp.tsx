import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../../components/wrapper/Wrapper";
import styles from "./SignUp.css";
import { useFormik } from 'formik';
import { validationSchema, initialValues } from "../../formik/SignUp";
import { ROUTES } from "../../navigation/siteRoutes";

export default function SignUp() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => { navigate("/") }
  })

  return (
    <Wrapper paperComponent title="CADASTRO">
      <Card sx={{ maxWidth: 590 }} style={styles.card}>
        <CardContent style={styles.cardContent}>
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
                <Typography style={styles.loginTxt}>Registrar</Typography>
              </Button>
            </CardActions>

            <Typography mt={3}>
              Já possui uma conta? Faça o <Link style={styles.link} to={ROUTES.LOGIN}>login</Link>
            </Typography>
          </form>

        </CardContent>
      </Card>
    </Wrapper>
  )
}