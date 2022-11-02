import { Typography, CardContent } from "@mui/material";
import React from "react";
import Wrapper from "../../components/wrapper";
import { Card } from "../characters"
import styles from "./Races.css"

export default function Races() {
  return (
    <Wrapper paperComponent title="RAÇAS">
      <div style={styles.racesContainer}>
      {
        Array(4).fill(1).map((_, index) => {
          return (
            <Card characterName="Meio Orc">
              <CardContent>
                <Typography variant="subtitle1" color="text.secondary" component="p">
                  Descrição
                </Typography>
              </CardContent>
            </Card>
          )
        })
      }
      </div>

    </Wrapper>
  )
}