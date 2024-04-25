import Image from "next/image";
import styles from "../src/app/membros.module.css";
import { Poppins } from "next/font/google";
import { React, useEffect, useState } from "react";
import { FaPaw } from "react-icons/fa";

export default function Caes() {
  const [dados, setdados] = useState(false);
  const [data, setData] = useState([]);
  const [corbotao, setcorbotao] = useState("1.0");

  async function fetchData() {
    const response = await fetch(
      "https://api.thedogapi.com/v1/images/search?limit=3&api_key=live_OxmFS46o4le3wQItRESbud1O3ZcUPyNL61RpAV6dnwyxMN6LnwIgBApFlep61rYl"
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
        marginTop: "60px",
        backgroundColor: "#FFD166",
        padding: ".5rem",
        flexDirection: "column",
        marginBottom: "60px",
        borderTopLeftRadius: "80px",
        borderBottomRightRadius: "80px",
        textAlign:"center",
      }}
      className={styles.sombra}
      data-aos="fade-in-down"


    
    >
      <div >
        <h1 style={{ fontSize: "40px" }}>Cães a rodo <FaPaw size={30}/></h1>
        <h3 style={{ marginBottom: "2rem" }}>
          Infinitas fotos de cães para alegrar o seu dia em apenas um click!
        </h3>
      </div>
      <div>
        {dados ? (
          <div
            style={{
              width: "100%",
              display:"flex",
              justifyContent: "space-around",
            }}
          >
            <div style={{ width: "25vw", height: "23vw" }} className={styles.polaroid}>
              <Image
                src={data[0].url}
                width={500}
                height={300}
                style={{ width: "100%", objectFit: "contain" }}
                priority
                alt="cão"
              />
            </div>
            <div style={{ width: "25vw", height: "23vw" }} className={styles.polaroid}>
              <Image
                src={data[1].url}
                width={500}
                height={300}
                style={{ width: "100%", objectFit: "contain" }}
                priority
                alt="cão"
              />
            </div>

            <div style={{ width: "25vw", height: "23vw" }} className={styles.polaroid}>
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
            Mais Cães <FaPaw size={30} />
          </button>
        </div>
        {/* <button onClick={()=>{console.log(data);}}>console</button> */}
      </div>
    </div>
  );
}
