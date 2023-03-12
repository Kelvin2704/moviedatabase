import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDraggable } from "react-use-draggable-scroll";
import fetchPopular from "../../../../redux/actions/Popular/fetchPopular";
import MovieCard from "../CardItem";

const Popular = ({ title, url, type }) => {
  const ref = useRef();
  const {events} = useDraggable(ref)
  const { arrPopular } = useSelector((state) => state.PopularReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const action = fetchPopular(url, type);
      dispatch(action);
    } catch (err) {
      console.log("err", err);
    }
  }, [type, url]);
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="container" ref={ref} {...events} >
          {arrPopular.map((item) => (
            <MovieCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
