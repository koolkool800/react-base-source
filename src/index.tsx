import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StoreProvider } from "./store";
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { AuthProvider } from "./context/auth-context";

import axios from "axios";
import { queryClient } from "./configs/queryClient";
import { ErrorBoundary } from "./pages/error";
import ErrorComponent from "./components/common/error";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

axios.defaults.baseURL = "https://dev-api.resellticket.co.kr/api/v1";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (request) => {
    console.log(request);
    // Edit request config
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    // Edit response config
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <ErrorBoundary>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ErrorBoundary>
      </StoreProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
