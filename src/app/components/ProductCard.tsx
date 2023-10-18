import React from "react";
import ExtractToClient from "./ExtractToClient";
import styles from "./ProductCard.module.css";
//rafce react arrow function export component
const ProductCard = () => {
  return (
    <div className="p-4 m-5 bg-sky-400">
      ProductCard
      <ExtractToClient />
    </div>
  );
};

export default ProductCard;
