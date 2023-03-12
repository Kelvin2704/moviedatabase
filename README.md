const API_KEY = 'cadf3572cef1420299b6f2138e8fc22e'

//actions.js
import axios from 'axios';

export function fetchArray(url) {
  return async (dispatch) => {
    const { data } = await axios.get(url);
    dispatch({ type: 'STORE_ARRAY', array: data });
  };
}
//Component.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArray } from './actions';

function Component() {
  const dispatch = useDispatch();
  const apiResponseArray = useSelector((state) => state.apiResponseArray); // Accessing redux store data

  React.useEffect(() => {
    dispatch(fetchArray('API_ENDPOINT'));
  }, [dispatch]);

  return (
    <>
     {/* Work with data from apiResponseArray here */}
    </>
  );
}

bg-gradient-to-b from-cyan-900 via-slate-900 to-zinc-900

Get Ready for a Movie Night!
An Endless List of Movies at Your Fingertips
Explore Our Huge Variety of Movies and Find Your Perfect Match!