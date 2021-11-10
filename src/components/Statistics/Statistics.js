import React from "react";
import { Table } from "react-bootstrap";
import Country from "../Country/Country";
import style from "./Statistics.module.css";

const Statistics = ({ statistics, loading, requestAPI }) => {
  return (
    <div className="container">
      {loading && requestAPI && <div className={style.loading}>Loading updated COVID-19 data...</div>}
      {!loading && statistics && (
        <Table striped bordered hover>
          <thead>
            <tr className={style.headers}>
              <th>Country</th>
              <th>Continent</th>
              <th>Population</th>
              <th>Cases</th>
              <th>Tests</th>
              <th>Deaths</th>
              <th className={style.none}>Last update</th>
            </tr>
          </thead>
          <tbody>
            {statistics?.map((country, i) => (
              <Country key={i} country={country} />
            ))}
          </tbody>
        </Table>
      )}
      {!statistics.length && !requestAPI && <div>No countries match your search, please try again</div>}
    </div>
  );
};

export default Statistics;
