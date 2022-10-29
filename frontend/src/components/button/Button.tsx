import React from "react";
import { Button as MUIButton, ButtonProps, Typography } from "@mui/material";
import styles from "./Button.css";

interface IButton extends ButtonProps {
  btnType?: "plus" | "minus" | "normal" | "save" | "edit";
}

export default function Button(props: IButton){
  return(
    <MUIButton
      {...props}
      variant="contained"
      style={
        props.style ?
        {...styles.btn, ...props.style } :
        props.btnType === "minus" ?
        {...styles.btnDelete} :
        styles.btn
      }
      size="small"
    >
      {
        props.btnType === "plus" ? (
          <Typography style={styles.btnTxt}>+</Typography>
        ) : 
        props.btnType === "minus" ? (
          <Typography style={styles.btnDeleteTxt}>-</Typography>
        ) :
        props.btnType === "save" ? (
          <Typography style={styles.btnSave}>Salvar</Typography>
        ) :
        props.btnType === "edit" ? (
          <Typography style={styles.btnSave}>Editar</Typography>
        ) : props.children
      }
    </MUIButton>
  )
}