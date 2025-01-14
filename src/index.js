import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Use exact casing
import "./styles/style.css"; // Import global styles if needed

// Create a root element and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
