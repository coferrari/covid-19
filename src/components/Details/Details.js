import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, searchCountry } from "../../redux/actions";
import { formatNumber } from "../../utils/index";
import Nav from "../Nav/Nav";
import NotFound from "../NotFound/NotFound";
import { Table } from "react-bootstrap";
import DetailsItems from "../../DetailsItems/DetailsItems";
import style from "./Details.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Details = () => {
  const { country } = useParams();
  const dispatch = useDispatch();
  const { search, requestAPI } = useSelector((state) => state.search);
  const criteria = ["cases", "deaths", "tests"];

  useEffect(() => {
    dispatch(searchCountry(country));
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, country]);

  const YYYY = search[0]?.time.slice(0, 4);
  const MM = search[0]?.time.slice(5, 7);
  const DD = search[0]?.time.slice(8, 10);
  const HH = search[0]?.time.slice(11, 13);
  const MIN = search[0]?.time.slice(14, 16);

  return (
    <div>
      {requestAPI && (
        <div className="container">
          <Nav />
          <SearchBar />
          <div className={style.loading}>Loading updated COVID-19 data...</div>
        </div>
      )}
      {search[0] && (
        <div className="container">
          <Nav />
          <SearchBar />
          <div>
            <h2>{search[0].country}</h2>
            <h4>
              {search[0].continent ? search[0].continent : "Not specified"}
            </h4>
            <div>
              <p>Last update: {`${MM}/${DD}/${YYYY} ${HH}:${MIN}`}</p>
              <p>
                Population:{" "}
                {search[0].population ? formatNumber(search[0].population) : 0}
              </p>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr className={style.headers}>
                  <th>{search[0]?.country}</th>
                  <th>1M Pop</th>
                  <th>Active</th>
                  <th>Critical</th>
                  <th>New</th>
                  <th>Recovered</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                {criteria?.map((c, i) => (
                  <DetailsItems key={i} search={search} c={c} />
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      )}
      {!requestAPI && !search.length && <NotFound />}
    </div>
  );
};

export default Details;
