import React from "react";
import { Button as MUIButton, ButtonProps } from "@mui/material";
import styles from "./Button.css";

interface IButton extends ButtonProps { }

export default function Button(props: IButton){
  return(
    <MUIButton {...props} variant="contained" style={styles.btn} size="small">
      {props.children}
    </MUIButton>
  )
}