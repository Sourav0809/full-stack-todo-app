import { useState } from "react";
import itemContext from "./itemContext";

const ItemProvider = (props) => {
  const [items, setItems] = useState([]);

  const providerValues = {
    items: items,
    setItems: setItems,
  };

  return (
    <itemContext.Provider value={providerValues}>
      {props.children}
    </itemContext.Provider>
  );
};

export default ItemProvider;
