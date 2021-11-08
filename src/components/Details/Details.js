import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { searchCountry } from "../../redux/actions";
import { formatNumber } from "../../utils/index";

const Details = () => {
  const { country } = useParams();
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.search);

  console.log(search);

  useEffect(() => {
    dispatch(searchCountry(country));
  }, [dispatch]);

  return (
    <div>
      {search[0] && (
        <div>
          <h2>Country: {search[0].country}</h2>
          <h3>Continent: {search[0].continent}</h3>
          <p>Date: {search[0].day}</p>
          <p>Last update: {search[0].time}</p>
          <p>Population: {search[0].population ? formatNumber(search[0].population) : 0}</p>
          <div>
            Cases:
            <p>1M Pop: {search[0].cases["1M_pop"] ? formatNumber(search[0].cases["1M_pop"]) : 0}</p>
            <p>Active: {search[0].cases.active ? formatNumber(search[0].cases.active) : 0}</p>
            <p>Critical: {search[0].cases.critical ? formatNumber(search[0].cases.critical): 0}</p>
            <p>New: {search[0].cases.new ? formatNumber(search[0].cases.new) : 0}</p>
            <p>Recovered: {search[0].cases.recovered ? formatNumber(search[0].cases.recovered) : 0}</p>
            <p>Total: {search[0].cases.total ? formatNumber(search[0].cases.total) : 0}</p>
          </div>
          <div>
            Deaths:
            <p>1M Pop: {search[0].deaths["1M_pop"] ? formatNumber(search[0].deaths["1M_pop"]): 0}</p>
            <p>New: {search[0].deaths.new ? formatNumber(search[0].deaths.new) : 0}</p>
            <p>Total: {search[0].deaths.total ? formatNumber(search[0].deaths.total) : 0}</p>
          </div>
          <div>
            Tests:
            <p>1M Pop: {search[0].tests["1M_pop"] ? formatNumber(search[0].tests["1M_pop"]) : 0}</p>
            <p>Total: {search[0].deaths.total ? formatNumber(search[0].deaths.total) : 0}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
