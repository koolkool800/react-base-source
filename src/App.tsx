import React from "react";
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

const App: React.FC = () => {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      {user !== null ? (
        <LayOut>
          <Routes>
            <Route path={"/"} element={<Navigate to={RoutesName.EVENT} />} />

            <Route path={RoutesName.EVENT} element={<SeatMapPage />} />
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
          <Route path={"/authen"} element={<Authen />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
