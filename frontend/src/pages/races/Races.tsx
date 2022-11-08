import { Typography, CardContent } from "@mui/material";
import React, { useState } from "react";
import Button from "../../components/button";
import Wrapper from "../../components/wrapper";
import { Card } from "../characters"
import styles from "./Races.css";
import Edit from '@mui/icons-material/Edit';

export default function Races() {
  const [count, setCount] = useState(0);
  
  return (
    <Wrapper paperComponent title="RAÇAS">
      <Button
        btntype="plus"
        onClick={() => { setCount(count + 1) }}
        title="Adicionar equipamento"
      />
      <div style={styles.racesContainer}>
      {
        Array(4).fill(1).map((_, index) => {
          return (
            <Card characterName="Meio Orc" />
          )
        })
      }
      </div>

    </Wrapper>
  )
}