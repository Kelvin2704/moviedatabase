import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from '../assets/logo-no-background.png'
const Navbar = () => {
  const links = [
    { title: "Home", path: "/home" },
    { title: "Movie List", path: "/movies" },
    { title: "TV Shows", path: "/tvshows" },
    { title: "Watch List", path: "/watchlist" },
  ];
  return (
    <div className="flex items-center justify-between h-full w-full px-4">
      <div className="flex-1">
        {links.map((link, i) => (
          <Link className="ml-4 text-xs" key={i} to={link.path}>
            {link.title}
          </Link>
        ))}
      </div>
      <div className=" text-xl">
        <Link to="/">
          <img className="w-20" src={logo} alt="" />
        </Link>
      </div>

      <div className="flex-1">
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
