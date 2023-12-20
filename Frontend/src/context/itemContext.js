import { createContext } from "react";

const itemContext = createContext({
    item: [],
    setItems: () => { }
})


export default itemContext