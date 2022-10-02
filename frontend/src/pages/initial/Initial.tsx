import React, { useEffect } from "react";
import Wrapper from "../../components/wrapper/Wrapper";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import styles from "./Initial.css"
import { getNews } from "../../services/initial";

export default function Initial(){
  useEffect(() => {
    getNews.then((data) => {
      console.log(data)
    })
  }, [])

  return(
    <Wrapper>
      <Paper style={styles.paper} square elevation={0}>
        <Typography variant="h4" style={styles.headingFour}>NOVIDADES</Typography>
      </Paper>
    </Wrapper>
  )
}