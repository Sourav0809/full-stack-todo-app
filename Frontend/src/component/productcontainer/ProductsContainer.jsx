import React, { useContext } from "react";
import Products from "./Products";
import itemContext from "../../context/itemContext";
const ProductsContainer = (props) => {
  const { items } = useContext(itemContext);
  return (
    <div style={{ marginTop: "20px" }}>
      {items.map((product) => {
        return (
          <Products
            key={product.id}
            product={product}
            onItemEdit={props.onItemEdit}
          />
        );
      })}
    </div>
  );
};

export default ProductsContainer;
