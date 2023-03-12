import tmdbConfig from "../api/tmdbConfig";

const fetchMovieDetail = async (url) => {
  const  {data}  = await tmdbConfig.get(url);
  console.table(url, data);
  return data;
  
};
export default fetchMovieDetail;
