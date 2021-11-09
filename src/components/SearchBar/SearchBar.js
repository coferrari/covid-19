import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCountries,
  setInputSearch,
  clearInputSearch,
} from "../../redux/actions";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchInput } = useSelector((state) => state.search);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(filterCountries(searchInput));
  }, [dispatch, searchInput]);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(setInputSearch(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleClear = (e) => {
    e.preventDefault();
    dispatch(clearInputSearch());
  };

  return (
    <div>
      <input
        onChange={(e) => handleChange(e)}
        value={searchInput}
        placeholder="Search..."
      ></input>
      {pathname !== "/" ? (
        <button onClick={(e) => handleSubmit(e)}>Search</button>
      ) : (
        <button onClick={(e) => handleClear(e)}>Clear filter</button>
      )}
    </div>
  );
};

export default SearchBar;
