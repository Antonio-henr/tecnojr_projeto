import Image from "next/image";
import styles from "../src/app/page.module.css";
import { Poppins } from "next/font/google";
import React from "react";
import { useState } from "react";

export default function Coragem() {
  const [img, setimg] = useState("/coragem1.png");

  const mudarimg = () => {
    if (img == "/coragem1.png") {
      setimg("/coragem2.png");
    } else {
      setimg("/coragem1.png");
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        className={`${styles.containerDesenhoCoragem} ${styles.sombra}`}
        data-aos="fade-up-right"
      >
        <Image
          src={img}
          width={300}
          height={300}
          className={styles.coragem1}
          onMouseLeave={() => mudarimg()}
        ></Image>
        <div>
          <h2
            style={{ color: "black", fontWeight: "bolder", fontSize: "30px" }}
          >
            Coragem o cão covarde
          </h2>
          <h3>
            Coragem é um cachorro que vive em uma fazenda distante onde
            acontecem aparições de monstros, fantasmas e outras criaturas. O
            animal está sempre defendendo e salvando seus donos idosos de
            eventos misteriosos.
          </h3>
        </div>
        <Image
          src="/casa_do_coragem.png"
          width={570}
          height={570}
          style={{ marginTop: 50, marginRight: "-380px" }}
          onMouseLeave={() => mudarimg()}
        ></Image>
      </div>
    </div>
  );
}
