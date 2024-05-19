import Image from "next/image";
import styles from "../src/app/page.module.css";
import { Poppins } from "next/font/google";
import React from "react";
import { useState } from "react";

export default function DragonBall() {
  const [voar, setvoar] = useState(0);
  const [sumir, setsumir] = useState("0.0");

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
        height: "380px",
      }}
      onClick={() => {
        setvoar(1700);
        setsumir("1.0");
      }}
    >
      <Image
        src="/dragao.webp"
        width={237.44}
        height={344.32}
        style={{ left: 60, position: "absolute", zIndex: 3 }}
      ></Image>
      <Image
        src="/gokuvoando.png"
        width={250}
        height={250}
        className={styles.imggokuvoando}
        style={{
          position: "absolute",
          right: voar,
          opacity: sumir,
          zindex: 3,
        }}
      ></Image>

      <div
        className={`${styles.containerDesenhoDragonball} ${styles.sombra}`}
        data-aos="fade-left"
      >
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <Image
          src="/Dragon_Ball_Z_logo.svg"
          width={3780}
          height={964}
          style={{ width:"350px", height:"60px"}}
          />
          <h3 style={{ marginLeft: "40px", color:"white" }}>
          As aventuras de um poderoso guerreiro chamado Goku, seu filho Gohan e seus aliados, que se esforçam para defender a Terra das ameaças. Eles são auxiliados por um dragão que concede os desejos de quem quer que reúna as sete Esferas do Dragão.
          </h3>
        </div>
        <Image
          src="/dragon-ball2.png"
          width={300}
          height={300}
          className={styles.coragem1}
        ></Image>
      </div>
    </div>
  );
}
