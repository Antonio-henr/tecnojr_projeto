import Image from "next/image";
import styles from "../src/app/page.module.css";
import { Poppins } from "next/font/google";
import React from "react";
import { useState } from "react";


import dramatotallogo from "../public/drama-total.png"
import luz from "../public/luz.png"
import luzinvertida from "../public/luzinvertida.png"
import flashh from "../public/flash.png"
import dramatotal from "../public/dramatotal.png"

export default function Dramatotal() {
  const [luzes, setluzes] = useState("none");
  const [esquerda, setesquerda] = useState("20%");
  const [cima, setcima] = useState("-45%");
  const [oloforte, setoloforte] = useState("none");
  const [animacao, setanimacao] = useState("none");

  const [tam, settam] = useState(500);

  function flash() {
    for (let index = 0; index < 5; index++) {
      setTimeout(() => {
        setanimacao("flip-down");
        setluzes("block");
        setesquerda("20%");
        setcima("-45%");
        settam(500);
        setoloforte("block");
      }, 100);
      setTimeout(() => {
        setluzes("block");
        setesquerda("20%");
        setcima("-45%");
        settam(500);
      }, 150);

      setTimeout(() => {
        setluzes("none");
        setesquerda("70%");
        setcima("-20%");
        settam(300);
      }, 200);
      setTimeout(() => {
        setluzes("block");

        setesquerda("5%");
        setcima("-60%");
        settam(200);
      }, 250);
      setTimeout(() => {
        setluzes("none");
        setesquerda("10%");
        setcima("-40%");
        settam(600);
      }, 400);
      setTimeout(() => {
        setluzes("block");
        setesquerda("20%");
        setcima("-5%");
        settam(400);
      }, 500);
      setTimeout(() => {
        setluzes("none");
        setesquerda("45%");
        setcima("-30%");
        settam(120);
      }, 650);
      setTimeout(() => {
        setluzes("none");
      }, 900);
    }
  }

  return (
    <div
      style={{
        width: "100%",
        marginTop: "90PX",
        justifyContent: "center",
        display: "flex",
      }}
      onMouseEnter={() => {
        flash();
      }}
      onMouseLeave={() => {
        setoloforte("none");
      }}
    >
      <div
        className={`${styles.containerDesenhoDramatotal} ${styles.sombra}`}
        data-aos="fade-up-left"
      >
        <Image
          src={dramatotallogo}
          width={300}
          height={300}
          style={{ marginLeft: "-75px", zIndex: 2 }}
        />
        <Image
          src={luz}
          width={75}
          height={75}
          style={{
            position: "absolute",
            left: "18%",
            top: "0%",

            zIndex: -1,
            display: oloforte,
          }}
          className={styles.oloforte1}
          data-aos={animacao}
        />

        <Image
          src={luzinvertida}
          width={100}
          height={110}
          style={{
            position: "absolute",
            right: "18%",
            top: "0%",
            zIndex: -1,
            display: oloforte,
          }}
          className={styles.oloforte2}
          data-aos={animacao}
        />

        <Image
          src={flashh}
          width={tam}
          height={tam}
          style={{
            position: "absolute",
            zIndex: -3,
            left: esquerda,
            display: luzes,
            top: cima,
          }}
        />
<div style={{marginLeft:"30px"}}>
        <h3 style={{ marginRight: "40px" }}>
          O reality show em formato de animação reúne jovens participantes que
          disputam de maneira acirrada uma competição cheia de desafios
          extremos. O vencedor levará um prêmio de 100 mil em dinheiro.
        </h3>
        <h3>(Bem melhor que BBB).</h3>
        </div>
        <Image
          src={dramatotal}
          width={350}
          height={350}
          style={{ zIndex: 2 }}
        />
      </div>
    </div>
  );
}
