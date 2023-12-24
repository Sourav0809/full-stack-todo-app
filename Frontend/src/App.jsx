// importing hooks
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
// importing components
import ItemAdd from "./component/itemAdd";
import ProductsContainer from "./component/productcontainer/ProductsContainer";
import itemContext from "./context/itemContext";

const App = () => {
  // hook assignment
  const { setItems, items } = useContext(itemContext);
  const [editMode, setEditMode] = useState(false);
  const [editItem, setEditItem] = useState({});
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

  const onItemEdit = (id) => {
    console.log(id);
    setEditMode(true);
    const findItem = items.find((val) => val.id === id);
    setEditItem(findItem);
  };

  // console.log(editItem);

  return (
    <>
      <ItemAdd
        editMode={editMode}
        setEditMode={setEditMode}
        editItem={editItem}
      />
      <ProductsContainer onItemEdit={onItemEdit} />
    </>
  );
};

export default App;
