import { createContext } from "react";

const itemContext = createContext({
    item: [],
    setItems: () => { },
    delete: () => { },
    edit: () => { }
})


export default itemContext