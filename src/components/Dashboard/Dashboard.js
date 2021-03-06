import React from "react";
import { useSelector } from "react-redux";
import { formatNumber } from "../../utils";
import style from "./Dashboard.module.css";

const Dashboard = () => {
  const { statistics, requestAPI } = useSelector((state) => state.statistics);

  const countCountries = statistics?.reduce((acc, curr) => {
    return curr.cases.new ? acc + 1 : acc + 0;
  }, 0);

  const totalCases = statistics?.reduce((acc, curr) => {
    return curr.cases.total ? acc + curr.cases.total : acc + 0;
  }, 0);

  const newCases = statistics?.reduce((acc, curr) => {
    return curr.cases.new
      ? acc + parseInt(curr.cases.new?.split("+").pop())
      : acc + 0;
  }, 0);

  const totalDeaths = statistics?.reduce((acc, curr) => {
    return curr.deaths.total ? acc + curr.deaths.total : acc + 0;
  }, 0);

  const newDeaths = statistics?.reduce((acc, curr) => {
    return curr.deaths.new
      ? acc + parseInt(curr.deaths.new?.split("+").pop())
      : acc + 0;
  }, 0);

  return (
    <div>
      <div className={style.header}>
        <h5>Global statistics</h5>
      </div>
      <div className={style.grid}>
        <div className={style.info}>
          {!requestAPI ? (
            <div>
              <h5>{countCountries}</h5>
              <p>Countries with confirmed cases</p>
            </div>
          ) : (
            <div className={style.loader}></div>
          )}
        </div>
        <div className={style.info}>
          {!requestAPI ? (
            <div>
              <h5>Total cases: {formatNumber(totalCases)}</h5>
              <h6>New cases: {formatNumber(newCases)}</h6>
            </div>
          ) : (
            <div className={style.loader}></div>
          )}
        </div>
        <div className={style.info}>
          {!requestAPI ? (
            <div>
              <h5>Total deaths: {formatNumber(totalDeaths)}</h5>
              <h6>New deaths: {formatNumber(newDeaths)}</h6>
            </div>
          ) : (
            <div className={style.loader}></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
