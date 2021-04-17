import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MetaProvider } from "./providers/MetaProvider";

ReactDOM.render(
  <React.StrictMode>
    <MetaProvider>
      <App />
    </MetaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
