import Image from "next/image";
import styles from "../src/app/page.module.css";
import { Poppins } from "next/font/google";
import React from "react";
import { useState } from "react";

export default function ApenasUmShow() {
  return (
    <div style={{ width: "100%" }}>
      <div
        className={`${styles.containerDesenhoApenasUmShow} ${styles.sombra}`}
        data-aos="flip-down"
      >
        <div 
        style={{display:"flex", flexDirection:"column", alignItems:"center", minWidth:"36vw"}}>
          <Image
            src="/regular_show.webp"
            width={640}
            height={360}
            style={{
              width: "320px",
              height: "180px",
              marginBottom: "-60px",
              marginTop: "-60px",

            }}
          />
          <h3 style={{ marginLeft: "40px" }}>
          Mordecai e Rigby são guardas de um parque. Mas esses melhores amigos são preguiçosos e não deixam o trabalho interferir com sua capacidade de se divertir.
          </h3>
        </div>
        <Image src="/apenas_um_show.png" width={350} height={350} />

        <h3 style={{ marginRight: "40px" }}>
        Os amigos acabam sempre pagando pelas suas ações irresponsáveis, pois se metem em mais confusões do que esperavam. A negligência no trabalho causa muito desgosto ao chefe temperamental da dupla, Benson.
        </h3>
      </div>
    </div>
  );
}