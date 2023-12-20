import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ItemProvider from "./context/itemProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ItemProvider>
    <App />
  </ItemProvider>
);
