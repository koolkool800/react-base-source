import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayOut from "./components/common/LayOut";
import CryptoDetail from "./pages/crypto/detail";
import CryptoList from "./pages/crypto/list";
import SeatMapPage from "./pages/seatmap";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LayOut>
        <Routes>
          <Route path="/" element={<SeatMapPage />} />
          <Route path="/crypto" element={<CryptoList />} />
          <Route path="/crypto/:coinId" element={<CryptoDetail />} />
        </Routes>
      </LayOut>
    </BrowserRouter>
  );
};

export default App;
