import { POPULAR_MOVIES, POPULAR_TV } from "../../types/Popular/PopularTypes";

const stateDefault = {
  arrPopular :[
    {
      "poster_path": "/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg",
      "adult": false,
      "overview": "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
      "release_date": "2016-08-03",
      "genre_ids": [
        14,
        28,
        80
      ],
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

export const PopularReducer = (state = stateDefault,action) => {
  switch(action.type) {
    case POPULAR_MOVIES : {
      let arrPopular = [...state.arrPopular];
      arrPopular = action.arrPopular;
      state.arrPopular = arrPopular;
      return {...state}
    }
    case POPULAR_TV: {
      let arrPopular = [...state.arrPopular];
      arrPopular = action.arrPopular;
      state.arrPopular = arrPopular;
      return {...state}
    }
    default : {
      return {...state}
    }
  }
}
  
