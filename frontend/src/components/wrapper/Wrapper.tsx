import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";
import Header from "../header";
import styles from "./Wrapper.css";

interface IWrapperPage {
  children: any;
  paperComponent?: boolean;
  title?: string;
}

export default function Wrapper(props: IWrapperPage) {
  return (
    <>
      <Header />
      <main>
        {
          props.paperComponent ? (
            <Paper style={styles.paper} square elevation={0}>
              <Typography gutterBottom variant="h4" style={styles.headingFour}>{props.title}</Typography>

              {props.children}
            </Paper>
          ) : props.children
        }
      </main>
    </>
  )
}