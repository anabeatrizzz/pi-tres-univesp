import React, { useState } from "react";
import { Card, CardContent, CardMedia, TextField, Typography } from "@mui/material";
import Wrapper from "../../components/wrapper/Wrapper";
import Staff from "../../assets/staff.jpg"
import styles from "./CreateEquipment.css";
import Button from "../../components/button"

export default function CreateEquipment() {
  const [count, setCount] = useState(0);

  return (
    <Wrapper paperComponent title="CRIAR EQUIPAMENTO">
      <Button
        btnType="plus"
        onClick={() => { setCount(count + 1) }}
        title="Adicionar equipamento"
      />

      <CardContent>
        <div style={styles.divCards}>
          {
            Array(count).fill(1).map((_, index) => (
              <EquipmentCard key={index} editable={true}>
                <div style={styles.statsMinusAndPlus}>
                  <Button
                    btnType="minus"
                    title="Excluir equipamento"
                    onClick={() => { setCount(count - 1) }}
                  />

                  <Button
                    onClick={() => { }}
                    type="submit"
                    btnType="save"
                    title="Salvar novo equipamento"
                  />
                </div>
              </EquipmentCard>
            ))
          }
          <EquipmentCard editable={false} />
        </div>
      </CardContent>
    </Wrapper>
  )
}

interface IEquipmentCard {
  editable: boolean;
  children?: any;
}

function EquipmentCard(props: IEquipmentCard) {
  const [count, setCount] = useState(1);

  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardMedia
        component="img"
        image={Staff}
      />
      <CardContent>
        {
          !props.editable ? (
            <>
              <Typography gutterBottom variant="h5" component="div">
                Cajado
              </Typography>

              <Typography gutterBottom variant="body2" color="text.secondary">
                Descrição do Cajado
              </Typography>

              <Typography gutterBottom variant="h6" component="div">
                +10 Resistencia
              </Typography>

              <Typography gutterBottom variant="h6" component="div">
                +10 Memória
              </Typography>
            </>
          ) : (
            <>
              <TextField
                required
                id="name"
                label="Nome"
                variant="standard"
                fullWidth
                margin="normal"
              />

              <TextField
                required
                id="description"
                label="Descrição"
                fullWidth
                variant="standard"
                margin="normal"
              />

              <div>
                {
                  Array(count).fill(1).map((_, index) => (
                    <div style={styles.statsRow}>
                      <TextField
                        required
                        id="number"
                        label="Qtd"
                        variant="standard"
                        margin="normal"
                      />

                      <TextField
                        required
                        id="stat"
                        label="Atributo"
                        variant="standard"
                        margin="normal"
                      />

                    </div>
                  ))
                }


                <div style={styles.statsMinusAndPlus}>
                  <Button
                    onClick={() => { setCount(count + 1) }}
                    btnType="plus"
                  />

                  <Button
                    onClick={() => {
                      if(count === 1) {
                        return
                      } else {
                        setCount(count - 1)
                      }
                    }}
                    btnType="minus"
                  />
                </div>

              </div>

              {props.children}
            </>
          )
        }
      </CardContent>
    </Card>
  )
}