import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./styles/index.css";
import "./styles/main.scss";
import "./i18n/config.ts";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
