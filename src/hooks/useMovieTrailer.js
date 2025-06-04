import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addMovieTrailer } from '../utils/movieSlice';

// In useMovieTrailer hook
const useMovieTrailer = (newMovieId) => {
  console.log("Movie ID received:", newMovieId); // Debug line
  
  const dispatch = useDispatch();
  
  const getMovieVideo = async () => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${newMovieId}/videos?language=en-US`;
     // console.log("API URL:", url); // Debug line
      
      const data = await fetch(url, API_OPTIONS);
      const json = await data.json();
      //console.log("API Response:", json); // Debug line
      
      const filterTrailer = json.results?.filter(
        (video) => video.type === "Trailer"
      );
      
      const trailer = filterTrailer?.length ? filterTrailer[0] : json.results?.[0];
      //console.log("Selected trailer:", trailer); // Debug line
      
      dispatch(addMovieTrailer(trailer));
    } catch (error) {
      console.error("Error fetching movie trailer:", error);
    }
  };

  useEffect(() => {
    if (newMovieId) {
      getMovieVideo();
    }
  }, [newMovieId]);
};

export default useMovieTrailer;
