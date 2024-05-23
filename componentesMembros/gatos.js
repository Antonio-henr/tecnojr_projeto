import Image from "next/image";
import styles from "../src/app/membros.module.css";
import { Poppins } from "next/font/google";
import { React, useEffect, useState } from "react";
import { FaPaw } from "react-icons/fa";
import { PiCatLight } from "react-icons/pi";

import gato from "../public/gato.png"


export default function Gatos() {
  const [dados, setdados] = useState(false);
  const [data, setData] = useState([]);
  const [corbotao, setcorbotao] = useState("1.0");

  async function fetchData() {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_OxmFS46o4le3wQItRESbud1O3ZcUPyNL61RpAV6dnwyxMN6LnwIgBApFlep61rYl"
    );
    const result = await response.json();
    setData(result);
    console.log(result);
    setdados(true);
    setcorbotao("1.0");
  }
  useEffect(() => {
    // fetchData();
  }, []);
  return (
    <div
      style={{
        minHeight: "60px",
        width: "97%",
        backgroundColor: "#BB9457",
        padding: ".5rem",
        flexDirection: "column",
        marginBottom: "60px",
        borderTopLeftRadius: "80px",
        borderBottomRightRadius: "80px",
        textAlign: "center",
        display: "flex",
      }}
      className={styles.sombra}
      data-aos="fade-in-down"
    >
      <Image
        src={gato}
        width={150}
        height={150}
        style={{ position: "absolute", bottom: "0px", left: "0px" }}
        priority
        alt="gato"
      />
      <div>
        <h1 style={{ fontSize: "40px" }}>
          <FaPaw size={30} /> Se cães, porque não gatos?
        </h1>
        <h3 style={{ marginBottom: "2rem" }}>
         Dispensa comentários.
         
        </h3>
      </div>
      <div>
        {dados ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{ width: "25vw", height: "23vw" }}
              className={styles.polaroid}
            >
              <Image
                src={data[0].url}
                width={500}
                height={300}
                style={{ width: "100%", objectFit: "contain" }}
                priority
                alt="cão"
              />
            </div>
            <div
              style={{ width: "25vw", height: "23vw" }}
              className={styles.polaroid}
            >
              <Image
                src={data[1].url}
                width={500}
                height={300}
                style={{ width: "100%", objectFit: "contain" }}
                priority
                alt="cão"
              />
            </div>

            <div
              style={{ width: "25vw", height: "23vw" }}
              className={styles.polaroid}
            >
              <Image
                src={data[2].url}
                width={500}
                height={300}
                style={{ width: "100%", objectFit: "contain" }}
                priority
                alt="cão"
              />
            </div>
          </div>
        ) : (
          <div />
        )}

        <div
          style={{ width: "100%", justifyContent: "center", display: "flex" }}
        >
          <button
            className={styles.button}
            style={{ opacity: corbotao }}
            onClick={() => {
              fetchData(), setcorbotao("0.1");
            }}
          >
            GATOS!! <PiCatLight size={32} />
          </button>
        </div>
        {/* <button onClick={()=>{console.log(data);}}>console</button> */}
      </div>
    </div>
  );
}
