import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import fetchMovieDetail from "../../services/fetchMovieDetail";
import { getBackdropUrl } from "../../utils/getBackdropUrl";

const MovieDetail = (props) => {
  const [movie, setMovie] = useState({});
  const { title, vote_average, backdrop_path } = movie;
  const { id } = useParams();
  useEffect(() => {
    fetchMovieDetail(`movie/${id}`).then(setMovie);
  }, [id]);
  return (
    <div className="movie-detail bg-black">
      <div className="contain-img">
        <img src={getBackdropUrl(backdrop_path)} alt="" />
      </div>
    </div>
  );
};

export default MovieDetail;
