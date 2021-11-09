import React from "react";
import { Table } from "react-bootstrap";
import Country from "../Country/Country";

const Statistics = ({ statistics, loading, requestAPI }) => {
  return (
    <div className="container">
      {loading && requestAPI && <div>loading updated COVID-19 data...</div>}
      {!loading && statistics && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Country</th>
              <th>Continent</th>
              <th>Population</th>
              <th>Cases</th>
              <th>Tests</th>
              <th>Deaths</th>
              <th>Last update</th>
            </tr>
          </thead>
          <tbody>
            {statistics?.map((country, i) => (
              <Country key={i} country={country} />
            ))}
          </tbody>
        </Table>
      )}
      {!statistics.length && !requestAPI && <div>no matches</div>}
    </div>
  );
};

export default Statistics;
