import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCountries,
  setInputSearch,
  clearInputSearch,
} from "../../redux/actions";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import style from "./SearchBar.module.css";

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
    <div className={style.container}>
      <input
        onChange={(e) => handleChange(e)}
        value={searchInput}
        placeholder="Search..."
        className={style.inputSearch}
      ></input>
      {pathname !== "/" ? (
        <Button variant="secondary" size="sm" onClick={(e) => handleSubmit(e)}>
          Search
        </Button>
      ) : (
        <Button variant="secondary" size="sm" onClick={(e) => handleClear(e)}>
          Clear filter
        </Button>
      )}
    </div>
  );
};

export default SearchBar;
