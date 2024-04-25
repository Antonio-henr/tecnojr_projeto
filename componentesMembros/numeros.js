import Image from "next/image";
import styles from "../src/app/membros.module.css";
import { Abyssinica_SIL, Poppins } from "next/font/google";
import { React, useEffect, useState } from "react";

export default function Numeros() {
  const [dados, setdados] = useState(false);
  const [data, setData] = useState([]);
  const [corbotao, setcorbotao] = useState("1.0");
  const [numero, setnumero] = useState(0);

  async function fetchData(num) {
   const response = await fetch(`http://numbersapi.com/${num}/?json`);
    const result = await response.json()
    console.log(result);
    setData(result);
    setdados(true);
    setcorbotao("1.0");
    console.log(result);
  }
  useEffect(() => {
    // fetchData();
  }, []);
  return (
    <div
    className={`${styles.containerNumeros} ${styles.sombra}`}
  

    >
      <div>
        <h1 style={{ fontSize: "40px", color: "white" }}>Fatos interessantes sobre números</h1>
        <h3 style={{ color: "white", margin:"10px" }}>Digite um número e vamos ver!</h3>
      </div>
      <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
        {dados ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
           
            <div
              style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "60px",
                borderBottomLeftRadius: "0px",
              }}
            >
              <h1 style={{color: "rgb(116, 61, 226)", fontSize: "30px" }}>
                {data.text}
              </h1>
            </div>
          </div>
        ) : (
          <div />
        )}
        <form style={{width:"25%"}}>
        <input
                type="number"
                placeholder="Digite um número"
                className={styles.input}
                value={numero}
                onChange={(i) => {
                  setnumero(i.target.value);
                }}
              />
        </form>

        <div
          style={{ width: "100%", justifyContent: "center", display: "flex" }}
        >
          <button
            className={styles.button}
            style={{ opacity: corbotao }}
            onClick={() => {
              fetchData(numero), setcorbotao("0.1");
            }}
          >
            Meu número
          </button>
        </div>
        {/* <button onClick={()=>{console.log(data);}}>console</button> */}
      </div>
    </div>
  );
}
