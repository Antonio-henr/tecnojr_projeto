import Image from "next/image";
import styles from "../src/app/page.module.css";
import { Poppins } from "next/font/google";
import React from "react";
import { useState } from "react";

export default function Modal(props) {
const[modal,setmodal]=useState("none")
if(props.abrir=="true"){
setmodal("flex")
}


    return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: modal,
        position: "fixed",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          position: "fixed",
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0.5,
        }}
        onClick={()=>{setmodal("none")}}
      />
      <div
        style={{
          width: "40vw",
          height: "25vw",
          backgroundColor: "black",
          borderRadius: "30px",
        }}
      ></div>
    </div>
  );
}
