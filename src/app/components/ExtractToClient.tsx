"use client";
import React from "react";
import styles from "./ProductCard.module.css";
const ExtractToClient = () => {
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
    </div>
  );
};

export default ExtractToClient;
