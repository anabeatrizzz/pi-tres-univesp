import { Typography, CardContent } from "@mui/material";
import React, { useState } from "react";
import Button from "../../components/button";
import Wrapper from "../../components/wrapper";
import { Card } from "../characters"
import styles from "./Races.css";
import Edit from '@mui/icons-material/Edit';
import BgImg from "../../assets/races-bg.png";

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
        <div style={{ display: "flex", justifyContent: "space-around", flexDirection: "row"}}>
          <div style={{ backgroundImage: `url(${BgImg})`, backgroundSize: "100%", backgroundRepeat: "no-repeat" }}><Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel quam lectus. Nulla lobortis sed sem sit amet scelerisque. Vivamus pulvinar pulvinar mi, non ultrices leo ultricies quis. Praesent lacinia dui tempor ante finibus consectetur. Proin sit amet quam laoreet, aliquam neque eget, interdum ligula. Nullam vel ex a dui dignissim viverra. Curabitur dictum elit lectus, sit amet viverra diam sodales in. Praesent rutrum felis at nisl molestie fermentum. Sed eget turpis sit amet est ornare mollis id at diam. Nunc vitae odio molestie, rhoncus nisi vitae, posuere enim. Nullam tristique sapien non tortor hendrerit, ut placerat dui ornare. Duis aliquet, massa eget ultrices aliquet, ante ante gravida mauris, at dignissim leo neque eget velit. Nullam sit amet congue erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</Typography></div>
          <div style={{ backgroundImage: `url(${BgImg})`, backgroundSize: "100%", backgroundRepeat: "no-repeat" }}><Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel quam lectus. Nulla lobortis sed sem sit amet scelerisque. Vivamus pulvinar pulvinar mi, non ultrices leo ultricies quis. Praesent lacinia dui tempor ante finibus consectetur. Proin sit amet quam laoreet, aliquam neque eget, interdum ligula. Nullam vel ex a dui dignissim viverra. Curabitur dictum elit lectus, sit amet viverra diam sodales in. Praesent rutrum felis at nisl molestie fermentum. Sed eget turpis sit amet est ornare mollis id at diam. Nunc vitae odio molestie, rhoncus nisi vitae, posuere enim. Nullam tristique sapien non tortor hendrerit, ut placerat dui ornare. Duis aliquet, massa eget ultrices aliquet, ante ante gravida mauris, at dignissim leo neque eget velit. Nullam sit amet congue erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</Typography></div>
        </div>

        <div>
          <div style={{ backgroundImage: `url(${BgImg})`, backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel quam lectus. Nulla lobortis sed sem sit amet scelerisque. Vivamus pulvinar pulvinar mi, non ultrices leo ultricies quis. Praesent lacinia dui tempor ante finibus consectetur. Proin sit amet quam laoreet, aliquam neque eget, interdum ligula. Nullam vel ex a dui dignissim viverra. Curabitur dictum elit lectus, sit amet viverra diam sodales in. Praesent rutrum felis at nisl molestie fermentum. Sed eget turpis sit amet est ornare mollis id at diam. Nunc vitae odio molestie, rhoncus nisi vitae, posuere enim. Nullam tristique sapien non tortor hendrerit, ut placerat dui ornare. Duis aliquet, massa eget ultrices aliquet, ante ante gravida mauris, at dignissim leo neque eget velit. Nullam sit amet congue erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</div>
          <div style={{ backgroundImage: `url(${BgImg})`, backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel quam lectus. Nulla lobortis sed sem sit amet scelerisque. Vivamus pulvinar pulvinar mi, non ultrices leo ultricies quis. Praesent lacinia dui tempor ante finibus consectetur. Proin sit amet quam laoreet, aliquam neque eget, interdum ligula. Nullam vel ex a dui dignissim viverra. Curabitur dictum elit lectus, sit amet viverra diam sodales in. Praesent rutrum felis at nisl molestie fermentum. Sed eget turpis sit amet est ornare mollis id at diam. Nunc vitae odio molestie, rhoncus nisi vitae, posuere enim. Nullam tristique sapien non tortor hendrerit, ut placerat dui ornare. Duis aliquet, massa eget ultrices aliquet, ante ante gravida mauris, at dignissim leo neque eget velit. Nullam sit amet congue erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</div>
        </div>
        {/* {
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

        {
          Array(3).fill(1).map((_, index) => {
            return (
              <div style={{ backgroundImage: `url(${BgImg})`, backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
                <div style={{ width: "50%"}}>
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
              </div>
            )
          })
        } */}
      </div>

    </Wrapper>
  )
}