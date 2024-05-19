"use client";
import Image from "next/image";
import styles from "../src/app/page.module.css";
import { Poppins } from "next/font/google";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleLogin } from "@react-oauth/google";
import GoogleLoginButton from "./googleLogin";

export default function Membros() {
  const [logoanimada, setlogoanimada] = useState("100%");
  const [email, setemail] = useState("");
  const [senha, setsenha] = useState("");
  const [cor, setcor] = useState("white");

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
    <div
      style={{ width: "100%", marginTop: "80px" }}
      onMouseEnter={() => {
        setlogoanimada("10%");
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            width: "40%",
            minHeight: "40px",
            backgroundColor: "#3B3C3C",
            alignItems: "center",
            borderRadius: "20px",
            padding: "2rem",
          }}
          className={styles.sombra}
          data-aos="flip-left"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className={styles.divanimada} style={{ width: logoanimada }}>
              <Image src="/tecno_logo.png" width={120} height={120} priority />
            </div>
            <h1 style={{ position: "absolute", marginLeft: "150px", color:"white" }}>
              Membros
            </h1>
          </div>
          <div>
            <h2 style={{color:"white"}}>O que voccê vai encontrar?</h2>
            <p style={{ marginTop: "30px", letterSpacing:"2px", color:"white" }}>
              Junte-se à nossa área de membros para acesso exclusivo a conteúdos
              inéditos, benefícios especiais e uma comunidade engajada. Explore
              novos horizontes, conecte-se com pessoas afins e aprofunde seu
              conhecimento. Não espere mais, inscreva-se agora e faça parte
              desta experiência única!
            </p>
          </div>
        </div>
        {/* METADE */}

        <div
          style={{
            width: "40%",
            minHeight: "40px",
            backgroundColor: "#2A2B2B",
            borderRadius: "20px",
          }}
          className={styles.sombra}
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
              <h1 style={{color:"white"}}>Área de Membros</h1>
              <p style={{color:"white"}}>Insira suas informações de login</p>
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
            <h2 style={{
                marginTop:"1rem",
                width: "100%",
                
                display:"flex",
                justifyContent:"center",
                color:"white"
              }}>ou</h2>
            <div
              style={{
                marginTop:"1rem",
                width: "100%",
                
                display:"flex",
                justifyContent:"center",
              }}
            >
              <GoogleLoginButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
