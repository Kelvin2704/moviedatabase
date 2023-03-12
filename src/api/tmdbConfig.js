import axios from "axios";
export default axios.create({
  baseURL:'https://api.themoviedb.org/3',
  headers: {
    Accept:'application/json'
  },
  params: {
    api_key:'cadf3572cef1420299b6f2138e8fc22e'
  }
})