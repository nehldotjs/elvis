import React from "react";
import ReactDOM from "react-dom/client";
 import App from "./App";
 import { PageContextHandler } from "./context/PageHandler";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PageContextHandler>
      <App />
    </PageContextHandler>
  </React.StrictMode>
);
 