import "./index.css";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Home } from "./pages/Home";
import HomeTemplates from "./templates/Home/HomeTemplate";
import MovieSearched from "./pages/MovieSearched/MovieSearched";
import MovieDetail from "./pages/Movies/MovieDetail";

export const history = createBrowserHistory();
function App() {
  return (
      <div className="grid grid-cols-10 ">
        <Router history={history}>
          <Switch>
            <HomeTemplates exact path="/" Component={Home} />
            <HomeTemplates path="/home" Component={Home} />
            <HomeTemplates path="/movie/:id" Component={MovieDetail} />
            <Route path="/search/:id" element={<MovieSearched />} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
