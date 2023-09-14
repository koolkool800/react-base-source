import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LayOut from "./components/common/LayOut";
import CryptoDetail from "./pages/crypto/detail";
import CryptoList from "./pages/crypto/list";
import SeatMapPage from "./pages/seatmap";
import CreateEventPage from "./pages/seatmap/create";
import { RoutesName } from "./routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LayOut>
        <Routes>
          <Route path={"/"} element={<Navigate to={RoutesName.EVENT} />} />

          <Route path={RoutesName.EVENT} element={<SeatMapPage />} />
          <Route path={RoutesName.EVENT_CREATE} element={<CreateEventPage />} />

          <Route path="/crypto" element={<CryptoList />} />
          <Route path="/crypto/:coinId" element={<CryptoDetail />} />
        </Routes>
      </LayOut>
    </BrowserRouter>
  );
};

export default App;
