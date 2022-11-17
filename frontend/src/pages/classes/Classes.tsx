import { Typography, CardContent } from "@mui/material";
import React, { useState } from "react";
import Button from "../../components/button";
import Wrapper from "../../components/wrapper";
import { Card } from "../characters"
import styles from "./Classes.css"

export default function Classes() {
  const [count, setCount] = useState(1);
  
  return (
    <Wrapper paperComponent title="CLASSES">
      <Button
        btntype="plus"
        onClick={() => { setCount(count + 1) }}
        title="Adicionar classe"
      />
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