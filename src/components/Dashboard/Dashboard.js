import React from "react";
import { useSelector } from "react-redux";
import { formatNumber } from "../../utils";

const Dashboard = () => {
  const { statistics } = useSelector((state) => state.statistics);

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
      <h1>COVID-19</h1>
      <div>
        <h5>Countries with confirmed cases: {countCountries}</h5>
      </div>
      <div>
        <h5>Total cases: {formatNumber(totalCases)}</h5>
        <h6>New cases: {formatNumber(newCases)}</h6>
      </div>
      <div>
        <h5>Total deaths: {formatNumber(totalDeaths)}</h5>
        <h6>New deaths: {formatNumber(newDeaths)}</h6>
      </div>
    </div>
  );
};

export default Dashboard;
