import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/virus.png";
import style from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={style.logocnt}>
      <img className={style.emoji} src={logo} alt="virus emoji" />
      <Link to="/" className={style.title}>
        <h1>COVID-19</h1>
      </Link>
    </div>
  );
};

export default Nav;
