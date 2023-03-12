import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/formatDate";
import { getPosterUrl } from "../../../utils/getPosterUrl";

const CardItem = ({ id, title, name, release_date, poster_path, first_air_date }) => {
  return (
    <Link target={"_blank"} to={`/${title ? "movie" : "tv"}/${id}`} className="flex flex-col pr-5 items-center cursor-pointer">
      <div className="imgPoster">
        <img src={getPosterUrl(poster_path)} className=" rounded-md shadow-lg drop-shadow-md w-[150px] h-[225px]" alt="" />
        <div className="flex flex-col w-[150px]">
          <div className="mt-2">
            {title ? (
              <p className="font-bold text-sm hover:text-cyan-500 ">{title.length <= 20 ? title : title.substr(0, 15) + "..."}</p>
            ) : (
              <p className="font-bold text-sm hover:text-cyan-500">{name.length <= 20 ? name : name.substr(0, 15) + "..."}</p>
            )}
          </div>
          <p className="md:text-xs text-zinc-500 w-full">{release_date ? formatDate(release_date) : formatDate(first_air_date)}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardItem;
