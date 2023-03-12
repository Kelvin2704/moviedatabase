import React from "react";
import { useParams } from "react-router-dom";

const MovieSearched = (props) => {
  const {id} = useParams()
  console.log(id)
 
  return <div>Movie Searched: {id}</div>;
};

export default MovieSearched;
