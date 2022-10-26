import React, { useState } from "react";
import { Button, Card, CardContent, CardMedia, TextField, Typography } from "@mui/material";
import Wrapper from "../../components/wrapper/Wrapper";
import Staff from "../../assets/staff.jpg"
import styles from "./CreateEquipment.css";
import colors from "../../components/colors";

export default function CreateEquipment() {
  const [count, setCount] = useState(0);

  return (
    <Wrapper paperComponent title="CRIAR EQUIPAMENTO">
      <Button
        onClick={() => { setCount(count + 1) }}
        variant="contained"
        size="small"
        style={styles.btn}
      >
        <Typography style={styles.plusTxt}>+</Typography>
      </Button>

      <CardContent>
        <div style={styles.divCards}>
          {
            Array(count).fill(1).map((_, index) => (
              <EquipmentCard key={index} editable={true}>
                <div style={styles.statsMinusAndPlus}>
                  <Button
                    onClick={() => { setCount(count - 1) }}
                    variant="contained"
                    size="small"
                    style={styles.btn}
                  >
                    <Typography title="Excluir equipamento" style={styles.minusTxt}>-</Typography>
                  </Button>

                  <Button
                    onClick={() => { }}
                    variant="contained"
                    size="small"
                    style={styles.btn}
                  >
                    <Typography title="Salvar novo equipamento" style={styles.minusTxt}>Salvar</Typography>
                  </Button>

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
                    variant="contained"
                    size="small"
                    style={styles.btn}
                  >
                    <Typography style={styles.minusTxt}>+</Typography>
                  </Button>
                  <Button
                    onClick={() => {
                      if(count === 1) {
                        return
                      } else {
                        setCount(count - 1)
                      }
                    }}
                    variant="contained"
                    size="small"
                    style={styles.btn}
                  >
                    <Typography style={styles.minusTxt}>-</Typography>
                  </Button>
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