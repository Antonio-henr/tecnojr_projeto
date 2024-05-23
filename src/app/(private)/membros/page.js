"use client";

import { React, useEffect, useState } from "react";
import styles from "../../membros.module.css";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Conselhos from "../../../../componentesMembros/conselhos";
import { Axios } from "axios";
import Caes from "../../../../componentesMembros/caes";
import Gatos from "../../../../componentesMembros/gatos";
import Nasa from "../../../../componentesMembros/nasa";
import Footer from "../../../../componentes/footer";
import Numeros from "../../../../componentesMembros/numeros";
import Redes from "../../../../componentes/redes";
import { useRouter } from "next/navigation";

import logotTecno from "../../../../public/logo_tecno2.webp"

export default function Membros() {
  const [dados, setdados] = useState({});

  const router = useRouter();


  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const [Open, setIsOpen] = useState(false);
  const abrindoRendes = () => {
    setIsOpen(true);
  };
  const fechandoRedes = () => {
    setIsOpen(false);
  };

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.containerHeader1}>
        <a href="./">
          <Image
            src={logotTecno}
            className={styles.imageHeader}
            width={152.88}
            height={31.64}
            priority
            data-aos="flip-left"
          />
          </a>
        </div>
        <div className={styles.containerHeader2}>
          <ul className={styles.navbar}>
            <li>
              <Link href="./">
                <h3 style={{ fontWeight: 300 }}>home</h3>
              </Link>
            </li>
            <li>
              {/* <Link href="./membros"> */}
              <h3 style={{ fontWeight: 300, color: "gray", cursor: "pointer" }}>
                membros
              </h3>
              {/* </Link> */}
            </li>
            <li>
              <h3
                style={{ fontWeight: 300, cursor: "pointer" }}
                onClick={() => {
                  abrindoRendes();
                }}
              >
                redes
              </h3>
            </li>
            <li>
              <Link href="./sobre">
                <h3 style={{ fontWeight: 300 }}>sobre</h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ height: "90px", width: "100%" }} />

      <h1 style={{ marginTop: "20px", color: "black" }}>
        Bem-vindo ao API FEST!
      </h1>
      <h2 style={{ marginTop: ".6rem", color: "black" }}>
        lugar onde você pode se deliciar com diversas API's duvidosas!
      </h2>

      <Conselhos />
      <Caes />
      <Gatos />
      <Nasa />
      <Numeros />
      <Redes
        isOpen={Open}
        onClose={() => {
          fechandoRedes();
        }}
      />   
      <Footer modal={()=>{abrindoRendes()}}/>

    </main>
  );
}
