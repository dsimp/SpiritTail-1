import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("app");
const root = createRoot(container);

console.log("Mounting React Root...");
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
