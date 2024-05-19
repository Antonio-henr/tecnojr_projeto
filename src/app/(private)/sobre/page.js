"use client";

import { React, useEffect, useState } from "react";
import styles from "./page.module.css";
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
import GoogleLoginButton from "../../../../componentes/googleLogin";


export default function Membros() {
  const [dados, setdados] = useState({});
  const [modal, setmodal] = useState(false);
  const [email, setemail] = useState("");
  const [senha, setsenha] = useState("");
  const [cor, setcor] = useState("white");

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
              <Link href="./">
                <h3 style={{ fontWeight: 300 }}>sobre</h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ height: "90px", width: "100%" }} />
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
      ) : (
        <div style={{ display: "none" }}></div>
      )}
      {/* <Image
        src="/code.webp"
        fill
        style={{
          objectPosition: "center",
          objectFit: "cover",
        }}
        alt="terra"
      /> */}
      <div
        style={{
          width: "85vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: "63.75vw",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontSize: 50, letterSpacing:"8px",color:"white" }}>Sobre Nós</h1>

          <p className={styles.paragrafo}>
            Hoje, reunimo-nos para celebrar algo extraordinário: o poder e a
            visão de uma equipe de programadores... composta por uma pessoa só.
            Sim, você ouviu corretamente! Às vezes, a grandeza não é medida pelo
            número de membros em uma equipe, mas pela magnitude do talento e da
            dedicação de um único indivíduo.
          </p>
          <p className={styles.paragrafo}>
            Imagine o cenário: uma única mente, munida apenas de um computador e
            uma paixão inabalável pela programação, ousou desafiar os limites do
            impossível. Sem um exército de colegas, sem longas reuniões de
            brainstorming, esta pessoa solitária empreendeu uma jornada
            solitária em direção ao desconhecido, impulsionada apenas por sua
            determinação e criatividade.
          </p>
          <p className={styles.paragrafo}>
            Enquanto muitos podem ver a solidão como um fardo, nosso programador
            solitário viu isso como uma oportunidade para a liberdade ilimitada.
            Sem as amarras das opiniões conflitantes, sem os compromissos de um
            consenso de equipe, ele ou ela foi capaz de explorar ideias sem
            restrições, perseguindo cada linha de código com uma devoção
            incomparável.
          </p>
          <p className={styles.paragrafo}>
            E oh, que maravilhas foram realizadas! Em uma tela em branco, eles
            deram vida a mundos virtuais, resolveram problemas complexos com
            elegância algorítmica e criaram aplicações que não apenas
            funcionavam, mas também encantavam e inspiravam. Cada conquista,
            cada linha de código, é um testemunho da capacidade humana de
            superar desafios e transcender as expectativas.
          </p>
          <p className={styles.paragrafo}>
            Mas não podemos esquecer que, por trás de cada triunfo, há horas
            intermináveis de trabalho árduo e dedicação incansável. Nos momentos
            de dúvida e desânimo, nosso programador solitário encontrou força na
            sua paixão pela arte da programação. Cada bug corrigido, cada
            desafio superado, era uma vitória pessoal e um passo em direção ao
            sucesso.
          </p>
          <p className={styles.paragrafo}>
            Hoje, levantamos nossas vozes em aplauso a este indivíduo notável.
            Que sua história sirva como um lembrete poderoso de que não são os
            números que definem o sucesso, mas sim a coragem, a criatividade e a
            perseverança de um único indivíduo. Que possamos todos nos inspirar
            na jornada extraordinária deste programador solitário e encontrar em
            nós mesmos a força para realizar nossos próprios sonhos, não importa
            o quão impossíveis possam parecer.
          </p>
          <p className={styles.paragrafo}>
            Àquele que ousa desafiar a norma e abraçar a solidão em nome da
            excelência, nós te saudamos. Que sua luz continue a brilhar
            intensamente, guiando o caminho para as possibilidades infinitas que
            aguardam aqueles que se atrevem a sonhar.
          </p>
          <h3 style={{color:"white"}}>Obrigado! </h3>
          <h4 style={{color:"white"}}>Texto gerado pelo ChatGPT 3.5</h4>
        </div>
        <div style={{ width: "20vw", height: "100vh", display: "flex" }}></div>
      </div>
      <div
        style={{
          width: "20vw",
          height: "80vh",
          display: "flex",
          position: "fixed",
          top: "120px",
          right: "8vw",
          flexDirection: "column",
        }}
      >
        <div  className={styles.polaroid}>
          <div style={{ width: "100%", height: "100%", position:"relative" }}>
            <Image
              src="/guanabara.jpg"
              width={1920}
              height={1080}
              priority
              className={styles.sideimage}
              alt="guanabara"
            />
            <h2 className={styles.textocentro} style={{color:"white"}}>Herói</h2>
          </div>
        </div>


        <div  className={styles.polaroid}>
          <div style={{ width: "100%", height: "100%" }}>
            <Image
              src="/marquinho.jpg"
              width={1920}
              height={1080}
              priority
              className={styles.sideimage}
              
              alt="mark zuckerberg"
            />
            <h2 className={styles.textocentro} style={{color:"white"}}>Plano A</h2>

          </div>
        </div>


        <div  className={styles.polaroid}>
          <div style={{ width: "100%", height: "100%" }}>
            <Image
              src="/mrrobot.webp"
              width={1920}
              height={1080}
              priority
              className={styles.sideimage}

              alt="mr.robot"
            />
            <h2 className={styles.textocentro} style={{color:"white"}}>Plano B</h2>

          </div>
        </div>
       
      </div>
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
