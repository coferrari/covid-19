import React from "react";
import { formatNumber } from "../../utils/index";
import style from "./DetailsItems.module.css";

const DetailsItems = ({ search, c }) => {

  return (
    <tr className={style.details}>
      <td className={style.criteria}>{c}</td>
      <td>{search[0][c]["1M_pop"] ? formatNumber(search[0][c]["1M_pop"]) : "-"}</td>
      <td>{search[0][c].active ? formatNumber(search[0][c].active) : "-"}</td>
      <td>{search[0][c].critical ? formatNumber(search[0][c].critical) : "-"}</td>
      <td>{search[0][c].new ? formatNumber(search[0][c].new) : "-"}</td>
      <td>{search[0][c].recovered ? formatNumber(search[0][c].recovered) : "-"}</td>
      <td>{search[0][c].total ? formatNumber(search[0][c].total) : "-"}</td>
    </tr>
  );
};

export default DetailsItems;
