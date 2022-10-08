import React from "react";
import Wrapper from "../../components/wrapper/Wrapper";
import { useParams } from 'react-router-dom';

export default function Race(){
  const params = useParams()
  return(
    <Wrapper paperComponent title={params.raceName?.toUpperCase()}></Wrapper>
  )
}