import React from "react";

interface ErrorComponentProps {
  message: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => {
  return (
    <div className="error-container">
      <p className="error-message">{message}</p>
    </div>
  );
};

export default ErrorComponent;
