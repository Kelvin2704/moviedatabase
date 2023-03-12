
import React, { useState } from "react";
import { history } from "../App";

// import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
    console.log("value is:", e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/search/${input}`);
  };
  return (
    <div className="flex justify-end">
      <div className="searchBar">
        <input className="input focus:outline-none" placeholder="Find your movies..." type="text" id="search" value={input} name="search" onChange={handleChange} />
        <button className="icon text-xs" onClick={handleClick}>
          {/* <BsSearch /> */}
          
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
