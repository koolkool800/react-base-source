import React from "react";
import { Spin } from "antd";
import "./index.css";
const LoadingComponent: React.FC = () => {
  return (
    <div className="loading-container">
      <Spin size="large" />
    </div>
  );
};

export default LoadingComponent;
