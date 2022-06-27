import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/global.css";
import { client } from "./lib/apollo";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
