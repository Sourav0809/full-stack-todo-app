import React, { useContext } from "react";
import Products from "./Products";
import itemContext from "../../context/itemContext";
const ProductsContainer = () => {
  const { items } = useContext(itemContext);
  console.log(items);
  return (
    <div style={{ marginTop: "20px" }}>
      {items.map((product) => {
        return <Products key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductsContainer;
