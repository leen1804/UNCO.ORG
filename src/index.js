import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
  </React.StrictMode>
);