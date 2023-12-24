import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import itemContext from "../context/itemContext";
const ItemAdd = ({ editMode, editItem, setEditMode }) => {
  // console.log(editItem);
  const { setItems } = useContext(itemContext);
  const [productName, setProductName] = useState("");
  const [price, setProductPrice] = useState("");
  const [quantity, setProductQuantity] = useState("");

  useEffect(() => {
    // Update the state when editItem changes
    setProductName(editItem.productName || "");
    setProductPrice(editItem.price || "");
    setProductQuantity(editItem.quantity || "");
  }, [editItem]);

  // when user add some product
  const onProductAddHandeler = async (e) => {
    const submitedData = {
      productName,
      price,
      quantity,
    };

    e.preventDefault();

    try {
      if (!editMode) {
        // storing the product
        const { data } = await axios.post(
          "http://localhost:5000/user/addProduct",
          submitedData
        );

        submitedData.id = data.id;
        setItems((prev) => {
          return [...prev, submitedData];
        });

        // making the input field blanks
        setProductName("");
        setProductPrice("");
        setProductQuantity("");
      } else {
        const editedItem = {
          id: editItem.id,
          productName: productName,
          price: price,
          quantity: quantity,
        };

        console.log(editedItem);

        const { data } = await axios.patch(
          "http://localhost:5000/user/editProduct",
          editedItem
        );

        console.log(data);

        setItems((values) => {
          const findIndex = values.findIndex((val) => val.id === editItem.id);

          // Ensure findIndex returns a valid index
          if (findIndex !== -1) {
            // Replace the found item with the updated editItem
            values[findIndex] = editedItem; // <-- Change this line

            // Return the updated array
            return [...values];
          }
          // If findIndex didn't find a matching item, return the original array
          return values;
        });

        // making the input field blanks
        setProductName("");
        setProductPrice("");
        setProductQuantity("");

        // making the state edit mode  false
        setEditMode(false);
      }
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
            value={price}
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
            value={quantity}
            onChange={(e) => {
              setProductQuantity(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "8px",
            backgroundColor: "skyblue",
            color: "white",
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ItemAdd;
