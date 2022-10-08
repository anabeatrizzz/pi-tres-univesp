import React from "react";
import Wrapper from "../../components/wrapper/Wrapper";
import { useParams } from 'react-router-dom';
import { Typography } from "@mui/material";

export default function Class(){
  const params = useParams()
  return(
    <Wrapper paperComponent title={params.className?.toUpperCase()}>
      <Typography>Texto</Typography>
    </Wrapper>
  )
}