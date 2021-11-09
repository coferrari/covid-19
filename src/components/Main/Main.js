import React, { useEffect } from "react";
import { getAll } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../Dashboard/Dashboard";
import Statistics from "../Statistics/Statistics";
import SearchBar from "../SearchBar/SearchBar";

const Main = () => {
  const dispatch = useDispatch();
  const { statistics } = useSelector((state) => state.statistics);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <div className="container">
      <Dashboard />
      <SearchBar />
      <Statistics statistics={statistics} />
    </div>
  );
};

export default Main;
