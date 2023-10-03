import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./router/routes";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/GlobalStyle";
import theme from "@/styles/theme";
import "@/styles/font.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

if ('serviceWorker' in navigator) {
  console.log(process.env.PUBLIC_URL);
  navigator.serviceWorker.register('firebase-messaging-sw.js')
    .then((registration) => {
      console.log('서비스 워커 등록 성공:', registration);
    })
    .catch((error) => {
      console.error('서비스 워커 등록 실패:', error);
    });
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      suspense: true,
    },
  },
});

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
            <AppRouter />
        </QueryClientProvider>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
