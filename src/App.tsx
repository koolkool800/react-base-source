import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LayOut from "./components/common/LayOut";
import CryptoDetail from "./pages/crypto/detail";
import CryptoList from "./pages/crypto/list";
import SeatMapPage from "./pages/seatmap";
import CreateEventPage from "./pages/seatmap/create";
import { RoutesName } from "./routes";
import Authen from "./pages/authen";
import { useAuth } from "./context/auth-context";
import axios from "axios";
import { axiosInstance } from "./configs/axios";
import CodeGenerator from "./pages/generate-cli";

const App: React.FC = () => {
  const { user } = useAuth();
  useEffect(() => {
    async function bootstrap() {
      try {
        const response = await axiosInstance.get("");
        console.log(response);
        throw new Error("An error occurred in SomeComponent");
      } catch (error) {
        console.log("Error : ", error);
      }
    }

    bootstrap();
  }, []);
  return (
    <BrowserRouter>
      {user !== null ? (
        <LayOut>
          <Routes>
            <Route path={"/"} element={<Navigate to={RoutesName.EVENT} />} />
            <Route path={RoutesName.EVENT} element={<SeatMapPage />} />
            <Route path={RoutesName.GENERATE_CLI} element={<CodeGenerator />} />

            <Route
              path={RoutesName.EVENT_CREATE}
              element={<CreateEventPage />}
            />

            <Route path="/crypto" element={<CryptoList />} />
            <Route path="/crypto/:coinId" element={<CryptoDetail />} />
          </Routes>
        </LayOut>
      ) : (
        <Routes>
          <Route path={"/"} element={<Navigate to={"/authen"} />} />
          <Route path={"/authen"} element={<Authen />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
