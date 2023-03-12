import tmdbConfig from "../../../api/tmdbConfig";
const fetchTrending = (url, type) => {
  return async (dispatch) => {
    try {
      const { data } = await tmdbConfig.get(url);
      const action = {
        type: type,
        arrTrending: data.results,
      };
      dispatch(action);
    } catch (err) {
      console.log("err",err);
    }
  };
};
export default fetchTrending;
