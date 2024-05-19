"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Modak, Poppins } from "next/font/google";
import Coragem from "../../componentes/coragem";
import { React, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ApenasUmShow from "../../componentes/apenasUmShow";
import DragonBall from "../../componentes/dragonBall";
import Dramatotal from "../../componentes/dramatotal";
import Kick from "../../componentes/kick";
import Link from "next/link";
import Footer from "../../componentes/footer";
import { useRouter } from "next/navigation";
import Membros from "../../componentes/mebros";
import Redes from "../../componentes/redes";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from "../../componentes/googleLogin";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const [modal, setmodal] = useState(false);
  const [email, setemail] = useState("");
  const [senha, setsenha] = useState("");
  const [cor, setcor] = useState("white");

  const [Open, setIsOpen] = useState(false);
  const abrindoRendes = () => {
    setIsOpen(true);
  };
  const fechandoRedes = () => {
    setIsOpen(false);
  };

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == "antonio@gmail.com" && senha == "12345")
      router.push("/membros");
    else {
      setemail("");
      setsenha("");
      setcor("#ff6961");
    }
  };
  return (
    <main className={styles.main}>
      <div className={styles.headerinvisivel} />
      <div className={styles.header}>
        <div className={styles.containerHeader1}>
          <a href="./">
            <Image
              src="/logo_tecno2.webp"
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
              <h3
                style={{ fontWeight: 300, cursor: "pointer" }}
                onClick={() => {
                  setmodal(true);
                }}
              >
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
      <div
        style={{
          width: "100vw",
          backgroundColor: "red",
          display: "flex",
          position: "relative",
        }}
      >
        <Image
          src="/desenhos_wall.png"
          className={styles.imgfundo}
          width={2000}
          height={720}
          quality={100}
          priority
        />
        <div className={styles.divimg} />
      </div>
      <h1 className={styles.tituloPrincipal}>Melhores desenhos da geração Z</h1>

      {modal ? (
        <div className={styles.modalcontainer}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              position: "fixed",
              backgroundColor: "black",
              justifyContent: "center",
              alignItems: "center",
              opacity: 0.5,
              zIndex: 99,
            }}
            onClick={() => {
              setmodal(false);
            }}
          />
          <div
            style={{
              width: "40vw",
              heightMin: "25vw",
              backgroundColor: "#959595",
              borderRadius: "30px",
              zIndex: 10,
              zIndex: 999,
            }}
          >
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              style={{ width: "100%", height: "100%", padding: "2rem" }}
            >
              <div
                style={{
                  width: "100%",
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h1 style={{ color: "white" }}>Área de Membros</h1>
                <p style={{ color: "white" }}>
                  Insira suas informações de login
                </p>
              </div>
              <input
                type="email"
                placeholder="Nome de Usuário"
                className={styles.input}
                style={{ backgroundColor: cor }}
                value={email}
                onChange={(i) => {
                  setemail(i.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Senha"
                className={styles.input}
                style={{ backgroundColor: cor }}
                value={senha}
                onChange={(i) => {
                  setsenha(i.target.value);
                }}
              />
              <button className={styles.button} type="submit">
                <h2 style={{ fontWeight: "300", fontSize: 26, color: "black" }}>
                  Entrar
                </h2>
              </button>
              <h2
                style={{
                  marginTop: "1rem",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                ou
              </h2>
              <div
                style={{
                  marginTop: "1rem",
                  width: "100%",

                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <GoogleLoginButton />
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div style={{ display: "none" }}></div>
      )}

      {/* CORAGEM O CAO COVARDE */}
      <Coragem />
      <DragonBall />
      <ApenasUmShow />
      <Dramatotal />
      <Kick />
      <Membros />

      <Redes
        isOpen={Open}
        onClose={() => {
          fechandoRedes();
        }}
      />

      <Footer
        modal={() => {
          abrindoRendes();
        }}
        membros={() => {
          setmodal(true);
        }}
      />
    </main>
  );
}
