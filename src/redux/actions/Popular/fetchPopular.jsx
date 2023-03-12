import tmdbConfig from "../../../api/tmdbConfig";
const fetchPopular = (url, type) => {
  return async (dispatch) => {
    try {
      const { data } = await tmdbConfig.get(url);
      const action = {
        type: type,
        arrPopular: data.results,
      };
      dispatch(action);
    } catch (err) {
      console.log("err",err);
    }
  };
};
export default fetchPopular;
