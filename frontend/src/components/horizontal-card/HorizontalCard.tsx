import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import styles from "./HorizontalCard.css";

export default function HorizontalCard() {
  return (
    <Card style={styles.card}>
      <Box style={styles.box}>
        <CardContent style={styles.cardContent}>
          <Typography component="div" variant="h5">
            Bola de Fogo
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição
          </Typography>
        </CardContent>
      </Box>
      <Divider orientation="vertical" flexItem />
      <CardContent style={styles.priceCardContent}>
        <Typography component="div" variant="h5">
          1d6
        </Typography>
      </CardContent>
    </Card>
  )
}