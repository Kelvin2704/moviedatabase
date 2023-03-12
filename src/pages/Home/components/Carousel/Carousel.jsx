import React from "react";
import "../../index.css";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { getBackdropUrl } from "../../../../utils/getBackdropUrl";
import { FaPlay, FaPlus } from "react-icons/fa";
import { GiRoundStar } from "react-icons/gi";
SwiperCore.use([Pagination]);

// import required modules

export function Carousel({ arrCarousel }) {
  console.log(arrCarousel.slice(0, 5));
  return (
    <>
      <Swiper
        autoplay
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {arrCarousel.slice(0, 5).map((slide) => (
          // <div key={slide.id}>{slide.id}</div>;
          <SwiperSlide key={slide.id}>
            <div className="flex relative w-full h-full drop-shadow-2xl">
              <div className="contain-img w-full">
                <img src={getBackdropUrl(slide.backdrop_path)} alt="" />
              </div>
              <div className="carousel-title ">
                <div className="flex flex-col text-left">
                  <h1 className="text-4xl mt-5 font-bold">{slide.title}</h1>
                  <div className="flex w-fit justify-center items-center">
                    <GiRoundStar color="yellow" />
                    <div className="ml-2">{slide.vote_average.toFixed(1)}</div>
                  </div>
                  <p className=" font-light mt-5 w-2/3">{slide.overview.length <= 20 ? slide.overview : slide.overview.substr(0, 250) + "..."}</p>
                  <div className="flex mt-8">
                    <button className="carousel-button play-button bg-[#ff0618]">
                      {" "}
                      <FaPlay /> Watch
                    </button>
                    <button className="carousel-button bg-black ">
                      <FaPlus /> Add list
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
