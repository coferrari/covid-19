import React, { useEffect } from "react";
import { getAll } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Statistics from "../Statistics/Statistics";
import Nav from "../Nav/Nav";

const Main = () => {
  const dispatch = useDispatch();
  const { filteredStatistics, loading, requestAPI } = useSelector((state) => state.statistics);

  useEffect(() => {
    if (loading) dispatch(getAll());
  }, [dispatch, loading]);

  return (
    <div>
      <Nav />
      <Statistics statistics={filteredStatistics} loading={loading} requestAPI={requestAPI} />
    </div>
  );
};

export default Main;
