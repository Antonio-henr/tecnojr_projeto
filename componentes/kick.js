import Image from "next/image";
import styles from "../src/app/page.module.css";
import { Poppins } from "next/font/google";
import React from "react";
import { useState } from "react";

export default function Kick() {
  return (
    <div style={{ width: "100%" }} data-aos="fade-left">
      <div className={`${styles.containerDesenhokick} ${styles.sombra}`}>
        <video
          src="/kickvideo.mp4"
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Image
          src="/kick1.png"
          width={300}
          height={300}
          style={{ marginLeft: "-145px" }}
        ></Image>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 style={{ fontSize: "30px" }}>Kick Buttowski</h2>
          <h3>
            Um jovem garoto chamado Clarence "Kick" Buttowski, que inspira a se
            tornar o maior aventureiro do mundo. O episódio piloto foi assistido
            por 842.000 espectadores, a maior estreia avaliada na história do
            canal DisneyXD.
          </h3>
        </div>
      </div>
    </div>
  );
}