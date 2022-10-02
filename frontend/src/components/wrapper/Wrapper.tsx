import React from "react";
import Header from "../header";

interface IWrapperPage {
  children: any;
}

export default function Wrapper(props: IWrapperPage){
  return(
    <>
      <Header />
      <main>
        {props.children}
      </main>
    </>
  )
}