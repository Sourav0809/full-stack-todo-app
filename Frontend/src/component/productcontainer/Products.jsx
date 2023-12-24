import axios from "axios";
import React, { useContext } from "react";
import itemContext from "../../context/itemContext";

const Products = ({ product, onItemEdit }) => {
  const productCtx = useContext(itemContext);

  // if user want to delete the product
  const onDeleteItem = async () => {
    try {
      const { data } = await axios.delete("http://localhost:5000/user/delete", {
        data: { id: product.id },
      });

      console.log(data);
      productCtx.delete(product.id);
    } catch (error) {
      console.log(error);
    }
  };

  // if user want to edit
  const onItemEditHandeler = () => {
    onItemEdit(product.id);
  };

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
      <h1>{product.price} </h1>
      <h1>{product.quantity} </h1>
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
        onClick={onItemEditHandeler}
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
        onClick={onDeleteItem}
      >
        X
      </button>
    </div>
  );
};

export default Products;
