import { TRENDING_MOVIES } from "../../types/Carousel/CarouselTypes";

const stateDefault = {
  arrCarousel :[
    {
      "adult": false,
      "overview": "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
      "release_date": "2016-08-03",
      "id": 297761,
      "original_title": "Suicide Squad",
      "original_language": "en",
      "title": "Suicide Squad",
      "backdrop_path": "/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg",
      "popularity": 48.261451,
      "vote_count": 1466,
      "video": false,
      "vote_average": 5.91
    },
  ]
}

export const CarouselReducer = (state = stateDefault,action) => {
  switch(action.type) {
    case "CAROUSEL" : {
      let arrCarousel = [...state.arrCarousel];
      arrCarousel = action.payload;
      state.arrCarousel = arrCarousel;
      return {...state}
    }
    
    default : {
      return {...state}
    }
  }
}
  
