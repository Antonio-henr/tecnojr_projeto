import Image from "next/image";
import styles from "../src/app/membros.module.css";
import { Abyssinica_SIL, Poppins } from "next/font/google";
import { React, useEffect, useState } from "react";

import socrates from "../public/socrates.png"


export default function Conselhos() {
  const [dados, setdados] = useState(false);
  const [data, setData] = useState([]);
  const [corbotao, setcorbotao] = useState("1.0");

  async function fetchData() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const result = await response.json();
    setData(result);
    setdados(true);
    setcorbotao("1.0");
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div
      style={{
        width: "97%",
        minHeight: "60px",
        backgroundColor: "#F37748",
        padding: "1rem",
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "90px",
        borderBottomLeftRadius: "0px",
        alignItems: "center",
      }}
      className={styles.sombra}

    >
      <div>
        <h1 style={{ fontSize: "40px" }}>Conselho do Sócrates</h1>
        <h3>Conselhos do Sócrates que podem te ajudar, ou não (em inglês)</h3>
      </div>
      <div>
        {dados ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Image
              src={socrates}
              width={200}
              height={200}
              style={{ marginRight: "-30px", marginTop: 0 }}
              onClick={() => {
                fetchData(), setcorbotao("0.1");
              }}
            />
            <div
              style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "60px",
                borderBottomLeftRadius: "0px",
              }}
            >
              <h1 style={{ color: "rgb(116, 61, 226)", fontSize: "30px" }}>
                {data.slip.advice}
              </h1>
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
            Novo Conselho
          </button>
        </div>
        {/* <button onClick={()=>{console.log(data);}}>console</button> */}
      </div>
    </div>
  );
}
