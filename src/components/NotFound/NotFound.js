import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div>
      Not found
      <button onClick={(e) => handleGoBack(e)}>Back to dashboard</button>
    </div>
  );
};

export default NotFound;
