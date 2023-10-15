"use client";
import React from "react";

const ExtractToClient = () => {
  return (
    <div>
      <button
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
