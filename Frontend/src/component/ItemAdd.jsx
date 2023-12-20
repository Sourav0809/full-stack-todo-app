import React, { useContext, useState } from "react";
import axios from "axios";
import itemContext from "../context/itemContext";
const ItemAdd = () => {
  //hooks assignment
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const { setItems } = useContext(itemContext);

  // when user add some product
  const onProductAddHandeler = async (e) => {
    const submitedData = {
      productName,
      productPrice,
      productQuantity,
      id: Math.random().toString(),
    };

    e.preventDefault();

    try {
      // storing the product
      const { data } = await axios.post(
        "http://localhost:5000/user/addProduct",
        submitedData
      );

      setItems((prev) => {
        return [...prev, submitedData];
      });

      setProductName("");
      setProductPrice("");
      setProductQuantity("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={onProductAddHandeler}
        style={{
          width: "800px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="name"> ProductName</label>
          <input
            type="text"
            placeholder=" enter the product name "
            style={{ padding: "8px" }}
            required
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="price"> ProductPrice</label>
          <input
            type="number"
            placeholder=" enter the product price "
            style={{ padding: "8px" }}
            required
            value={productPrice}
            onChange={(e) => {
              setProductPrice(e.target.value);
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="name"> Qty</label>
          <input
            type="number"
            placeholder=" enter the product Qauntity "
            style={{ padding: "8px" }}
            required
            value={productQuantity}
            onChange={(e) => {
              setProductQuantity(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          style={{ padding: "8px", backgroundColor: "skyblue", color: "white" }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ItemAdd;
