import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, searchCountry } from "../../redux/actions";
import { formatNumber } from "../../utils/index";
import Nav from "../Nav/Nav";
import NotFound from "../NotFound/NotFound";

const Details = () => {
  const { country } = useParams();
  const dispatch = useDispatch();
  const { search, requestAPI } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(searchCountry(country));
    return() => {
      dispatch(clearDetail())
    }
  }, [dispatch, country]);

  const YYYY = search[0]?.time.slice(0, 4)
  const MM = search[0]?.time.slice(5, 7)
  const DD = search[0]?.time.slice(8, 10)
  const HH = search[0]?.time.slice(11, 13)
  const MIN = search[0]?.time.slice(14, 16)

  return (
    <div>
      {requestAPI && 
        <div>
          <Nav />
          <div>loading updated COVID-19 data...</div>
        </div>}
      {search[0] &&
        <div>
          <Nav />
          <div className="container">
            <h2>Country: {search[0].country}</h2>
            <h3>Continent: {search[0].continent ? search[0].continent : "Not specified" }</h3>
            <p>Last update: {`${MM}/${DD}/${YYYY} ${HH}:${MIN}`}</p>
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
        </div>
      }
      {!requestAPI && !search.length && <NotFound />}
    </div>
  );
};

export default Details;
