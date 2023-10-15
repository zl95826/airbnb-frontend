"use client";
import React from "react";
//rafce react arrow function export component
const ProductCard = () => {
  return (
    <div>
      ProductCard
      <button
        onClick={() => {
          console.log("test");
        }}
      >
        Button
      </button>
    </div>
  );
};

export default ProductCard;
