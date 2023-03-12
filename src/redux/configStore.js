import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/Carousel/CarouselReducer";
import { PopularReducer } from "./reducers/Popular/PopularReducer";

import { TrendingReducer } from "./reducers/Trending/TrendingReducer";

const rootReducer = combineReducers({
  //app's state
  CarouselReducer,
  TrendingReducer,
  PopularReducer,

});

//Cấu hình thunk
const middleWare = applyMiddleware(thunk);

const customCompose = compose(middleWare, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(rootReducer, customCompose);
