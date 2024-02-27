import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import Router from "./router/router.tsx";

const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  colors: {},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  </React.StrictMode>,
);
