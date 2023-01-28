import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";
const root = ReactDOM.createRoot(document.getElementById("root"));

// the entire App Component, which has children components <Home/>, <Modal/>, and <Sidebar/>
// gets wrapped in the Provider Component, and gives access to the Value property.
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
