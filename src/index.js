import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LocalStorageProvider } from "./components/LocalStorageContext";


ReactDOM.render(
  <React.StrictMode>
    <LocalStorageProvider>
      <App />
    </LocalStorageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
