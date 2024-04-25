import Image from "next/image";
import styles from "../src/app/page.module.css";
import { Poppins } from "next/font/google";
import React from "react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Redes = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.422)",
        position: "fixed",
        zIndex: 999,
        justifyContent:"center",
        alignItems:"center",
        display:"flex"
      }}
      onClick={onClose}
      data-aos="flip-up"
    >
      <div style={{display:"flex", width:"33vh", justifyContent:"space-between"}}>
        <div className={styles.icon} >
          <a href="https://api.whatsapp.com/send?phone=5573999366330" target="_blank">
          <FaWhatsapp size={50}/>
          </a>
        </div>
        <div className={styles.icon}>
        <a href="https://www.instagram.com/antonio.henr/" target="_blank">

          <FaInstagram size={50}/>
          </a>
        </div>
        <div className={styles.icon}>
        <a href="https://github.com/Antonio-henr" target="_blank">

          <FaGithub size={50}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Redes;
