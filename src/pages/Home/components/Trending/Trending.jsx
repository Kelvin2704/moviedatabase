import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDraggable } from "react-use-draggable-scroll";
import fetchTrending from "../../../../redux/actions/Trending/fetchTrending";
import MovieCard from "../CardItem";

const Trending = ({ title, url, type }) => {
  const ref= useRef();
  const {events} = useDraggable(ref)
  const { arrTrending } = useSelector((state) => state.TrendingReducer);
  console.log(`arrTrending ${title}`,arrTrending)
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const action = fetchTrending(url, type);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  }, [type,url]);
  return (
    <div>
      <div className="relative flex flex-col items-center">
        <div className="container" ref={ref} {...events}>
          {arrTrending.map((item)=> (
            <MovieCard key={item.id} {...item}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
