import tmdbConfig from "../../../api/tmdbConfig";
const fetchCarousel = (url,type) => {
  return async (dispatch) => {
    try {
      const { data } = await tmdbConfig.get(url,type);
      const action = {
        type: type,
        payload: data.results,
      };
      dispatch(action);
    } catch (err) {
      console.log("err",err);
    }
  };
};
export default fetchCarousel;
