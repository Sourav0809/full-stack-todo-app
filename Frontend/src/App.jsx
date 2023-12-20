// importing hooks
import React, { useContext, useEffect } from "react";
import axios from "axios";
// importing components
import ItemAdd from "./component/itemAdd";
import ProductsContainer from "./component/productcontainer/ProductsContainer";
import itemContext from "./context/itemContext";

const App = () => {
  // hook assignment
  const { setItems } = useContext(itemContext);

  // sideeffect
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/user/getProducts"
        );
        if (data) {
          setItems(data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <ItemAdd />
      <ProductsContainer />
    </>
  );
};

export default App;
