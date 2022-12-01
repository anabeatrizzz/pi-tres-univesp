import React from "react";
import { Button as MUIButton, ButtonProps, Typography } from "@mui/material";
import styles from "./Button.css";
import { Edit } from "@mui/icons-material";

interface IButton extends ButtonProps {
  btntype?: "plus" | "minus" | "normal" | "save" | "edit";
}

export default function Button(props: IButton){
  return(
    <MUIButton
      {...props}
      variant="contained"
      style={
        props.style ?
        {...styles.btn, ...props.style } :
        props.btntype === "minus" ?
        {...styles.btnDelete} :
        styles.btn
      }
      size="small"
    >
      {
        props.btntype === "plus" ? (
          <Typography style={styles.btnTxt}>+</Typography>
        ) : 
        props.btntype === "minus" ? (
          <Typography style={styles.btnDeleteTxt}>-</Typography>
        ) :
        props.btntype === "save" ? (
          <Typography style={styles.btnSave}>Salvar</Typography>
        ) :
        props.btntype === "edit" ? (
          <Typography style={styles.btnSave}><Edit /></Typography>
        ) : props.children
      }
    </MUIButton>
  )
}