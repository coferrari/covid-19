import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchCountry, filterCountries } from "../../redux/actions";

const SearchBar = () => {
  const [input, setInput] = useState("a");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(filterCountries(input));
  // }, [input]);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchCountry(input));
  };

  return (
    <div>
      <input onChange={(e) => handleChange(e)}></input>
      <button onClick={(e) => handleSubmit(e)}>Search</button>
    </div>
  );
};

export default SearchBar;
