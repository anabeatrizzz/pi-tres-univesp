import { Typography, CardContent } from "@mui/material";
import React from "react";
import Wrapper from "../../components/wrapper";
import { Card } from "../characters"
import styles from "./Classes.css"

export default function Classes() {
  return (
    <Wrapper paperComponent title="RAÇAS">
      <div style={styles.classesContainer}>
      {
        Array(4).fill(1).map((_, index) => {
          return (
            <Card characterName="Gurreiro">
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