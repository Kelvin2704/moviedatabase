import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchCarousel from "../../redux/actions/Carousel/fetchCarousel";
import { Carousel } from "./components/Carousel/Carousel";
import PopularTabs from "./components/Popular/PopularTabs";
import TrendingTabs from "./components/Trending/TrendingTabs";

const Home = (props) => {
  const { arrCarousel } = useSelector((state) => state.CarouselReducer);

  const dispatch = useDispatch();

  // async function getFeatured() {
  //   const { data } = await tmdbConfig.get("/trending/movie/week");
  //   console.log("data", data.results);

  //   if (data) {
  //     setFeatured({
  //       id: data.results.id,
  //       title: data.results.title,
  //       image: data.results.backdrop_path,
  //       year: data.results.release_date,
  //       // length: data.runtime + "m",
  //       // stars: Math.round(data.stars),
  //     });
  //   }
  //   console.log("featured",featured)
  // }

  useEffect(() => {
    dispatch(fetchCarousel("/trending/movie/week", "CAROUSEL"));
  }, []);
  return (
    <div className="col-span-10 absolute top-0 w-full">
      
      <Carousel arrCarousel={arrCarousel} />
      <TrendingTabs title="Trending" />
      <PopularTabs title="What's Popular?" />
    </div>
  );
};

export default Home;
