import React from "react";

const Products = ({ product }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",

        width: "1000px",
        margin: "auto",
        border: "1px solid black",
      }}
    >
      <h1>{product.productName} </h1>
      <h1>{product.productPrice} </h1>
      <h1>{product.productQuantity} </h1>
      <button
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "5px",
          paddingBottom: "5px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Edit
      </button>
      <button
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "5px",
          paddingBottom: "5px",
          backgroundColor: "red",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        X
      </button>
    </div>
  );
};

export default Products;
