import Image from "next/image";
import styles from "../src/app/membros.module.css";
import { Poppins } from "next/font/google";
import { React, useEffect, useState } from "react";
import { FaPaw } from "react-icons/fa";
import { PiCatLight } from "react-icons/pi";

export default function Nasa() {
  const [dados, setdados] = useState(false);
  const [data, setData] = useState([]);
  const [corbotao, setcorbotao] = useState("1.0");

  async function fetchData() {
    const response = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=uKspRkcYzZgHsjoOyLgaHaoNU78Hz3di55C6QlNT&thumbs=True&count=3"
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
        backgroundColor: "white",
        padding: ".5rem",
        flexDirection: "column",
        marginBottom: "60px",
        textAlign: "center",
        display: "flex",
        position: "relative",
        borderBottomRightRadius: "90px",
        borderBottomLeftRadius: "90px",
      }}
      className={styles.sombra}
      data-aos="fade-in-down"
    >
      <Image
        src="/espaco.jpg"
        fill
        style={{
          objectPosition: "center",
          zIndex: "-2",
          objectFit: "cover",
          borderBottomRightRadius: "90px",
          borderBottomLeftRadius: "90px",
        }}
        priority
        alt="terra"
      />

      <div>
        <h1
          style={{
            fontSize: "40px",
            color: "black",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Direto da{" "}
          <Image
            src="/nasa.png"
            height={130}
            width={130}
            style={{ marginLeft: "10px" }}
            priority
            alt="nasa"
          />
        </h1>
        <h3 className={styles.textonasa}>
          Fotos diretamente do banco de dados da NASA
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
                src={data[0].hdurl}
                width={500}
                height={300}
                style={{ width: "100%", objectFit: "contain" }}
                priority
                alt="nasa"
              />
              <div class={styles.overlay2}>
                <div class={styles.text}>{data[0].explanation}</div>
              </div>
            </div>
            <div
              style={{ width: "25vw", height: "23vw" }}
              className={styles.polaroid}
            >
              <Image
                src={data[1].hdurl}
                width={500}
                height={300}
                style={{ width: "100%", objectFit: "contain" }}
                priority
                alt="nasa"
              />
              <div class={styles.overlay}>
                <div class={styles.text}>{data[1].explanation}</div>
              </div>
            </div>

            <div
              style={{ width: "25vw", height: "23vw" }}
              className={styles.polaroid}
            >
              <Image
                src={data[2].hdurl}
                width={500}
                height={300}
                style={{ width: "100%", objectFit: "contain" }}
                priority
                alt="nasa"
              />
              <div class={styles.overlay2}>
                <div class={styles.text}>{data[2].explanation}</div>
              </div>
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
            Mostre-me!{" "}
          </button>
        </div>

        {/* <button onClick={()=>{console.log(data);}}>console</button> */}
      </div>
    </div>
  );
}
