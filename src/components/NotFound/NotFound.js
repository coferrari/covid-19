import React from "react";
import { useNavigate, useLocation } from "react-router";
import logo from "../../assets/virus.png";
import style from "./NotFound.module.css";
import { Button } from "react-bootstrap";

const NotFound = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation()

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className={style.container}>
      <img src={logo} alt="covid-19" className={style.img} />
      <h5>
        {`The requested URL ${pathname} was not found `}
      </h5>
      <Button variant="secondary" onClick={(e) => handleGoBack(e)}>Back to dashboard</Button>
    </div>
  );
};

export default NotFound;
