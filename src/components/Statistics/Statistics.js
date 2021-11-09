import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import Country from "../Country/Country";
import { countryOrder } from "../../redux/actions/index";

const Statistics = ({ statistics }) => {
  const [az, setAz] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countryOrder(az))
  }, [dispatch, az])

  const handleOrderCountry = (e) => {
    e.preventDefault()
    setAz(!az);
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th onClick={handleOrderCountry}>Country</th>
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
  );
};

export default Statistics;
