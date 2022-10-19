import React, { useState } from "react";
import { Button, Card, CardContent, CardMedia, TextField, Typography } from "@mui/material";
import Wrapper from "../../components/wrapper/Wrapper";
import Staff from "../../assets/staff.jpg"

export default function CreateEquipment() {
  const [count, setCount] = useState(0);

  return (
    <Wrapper paperComponent title="CRIAR EQUIPAMENTO">
      <Button
        onClick={() => { setCount(count + 1) }}
        variant="contained"
        size="small">
        +
      </Button>

      <CardContent>
        <div style={{
          display: "flex",
          flexDirection: "row" as "row",
          flexWrap: "wrap" as "wrap"
        }}>
          {
            Array(count).fill(1).map((_, index) => (
              <EquipmentCard editable={true} />
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
}

function EquipmentCard(props: IEquipmentCard) {
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
                margin="normal"
              />

              <TextField
                required
                id="description"
                label="Descrição"
                variant="standard"
                margin="normal"
              />

              <div style={{ display: "flex", flexDirection: "row" }}>
                <TextField
                  required
                  id="number"
                  label="Qtd"
                  variant="standard"
                  margin="normal"
                  sx={{ width: "20%" }}
                />

                <TextField
                  required
                  id="stat"
                  label="Atributo"
                  variant="standard"
                  margin="normal"
                />

              </div>
            </>
          )
        }
      </CardContent>
    </Card>
  )
}