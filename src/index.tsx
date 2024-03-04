import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/dates/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import Router from "./router/router.tsx";
import { SettingsProvider } from "./context/settings.context.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  colors: {},
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <SettingsProvider>
          <Router />
        </SettingsProvider>
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
