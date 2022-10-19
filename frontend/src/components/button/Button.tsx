import React from "react";
import { Button as MUIButton } from "@mui/material";
import styles from "./Button.css";

export default function Button(props: any){
  return(
    <MUIButton variant="contained" style={styles.btn} size="small">
      {props.children}
    </MUIButton>
  )
}