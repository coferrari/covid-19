import React from "react";
import { formatNumber } from "../../utils/index";
import { Link } from "react-router-dom";
import style from "./Country.module.css";

const Country = ({ country }) => {

  const YYYY = country.time?.slice(0, 4)
  const MM = country.time?.slice(5, 7)
  const DD = country.time?.slice(8, 10)
  const HH = country.time?.slice(11, 13)
  const MIN = country.time?.slice(14, 16)

  return (
    <tr className={style.details}>
      <td>
        <Link to={`/country/${country.country}`}>{country.country}</Link>
      </td>
      <td>{country.continent ? country.continent : "Not specified"}</td>
      <td>{country.population ? formatNumber(country.population) : "-"}</td>
      <td>{country.cases.total ? formatNumber(country.cases.total) : "-"}</td>
      <td>{country.tests.total ? formatNumber(country.tests.total) : "-"}</td>
      <td>{country.deaths.total ? formatNumber(country.deaths.total) : "-"}</td>
      <td>{`${MM}/${DD}/${YYYY} ${HH}:${MIN}`}</td>
    </tr>
  );
};

export default Country;
