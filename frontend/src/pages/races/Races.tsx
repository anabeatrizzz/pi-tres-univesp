import React, { useState } from "react";
import Button from "../../components/button";
import Wrapper from "../../components/wrapper";
import { Card } from "../characters"
import styles from "./Races.css";

export default function Races() {
  const [count, setCount] = useState(1);

  return (
    <Wrapper paperComponent title="RAÇAS">
      <Button
        btntype="plus"
        onClick={() => { setCount(count + 1) }}
        title="Adicionar raça"
      />
      <div style={styles.racesContainer}>
      {
          Array(count).fill(1).map((_, index) => {
            return (
              <Card characterName="Meio Orc">
                <div style={styles.statsMinusAndPlus}>
                  <Button
                    btntype="minus"
                    title="Excluir raça"
                    onClick={() => { setCount(count - 1) }}
                  />

                  <Button
                    onClick={() => { }}
                    type="submit"
                    btntype="save"
                    title="Salvar nova raça"
                  />
                </div>
              </Card>
            )
          })
        }
        <Card characterName="Meio Orc">
          <div style={styles.statsMinusAndPlus}>
            <Button
              btntype="minus"
              title="Excluir raça"
              onClick={() => { setCount(count - 1) }}
            />

            <Button
              onClick={() => { }}
              type="submit"
              btntype="save"
              title="Salvar nova raça"
            />
          </div>
        </Card>
      </div>

    </Wrapper>
  )
}