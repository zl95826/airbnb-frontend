"use client";
import React from "react";
import styles from "./ProductCard.module.css";
const ExtractToClient = () => {
  const name = styles.cardContainer + " " + styles["card-test"];
  return (
    <div className={styles["card-test"]}>
      <button
        className={styles.cardContainer}
        //how to use module css
        onClick={() => {
          console.log("test");
        }}
      >
        ExtractToClient Button
      </button>
      <p className={name}>I just want to test the style.</p>
    </div>
  );
};

export default ExtractToClient;
