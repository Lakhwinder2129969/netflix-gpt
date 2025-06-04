import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovie } from "../utils/movieSlice";

const useNowPlayingMovie = () => {
    const dispatch = useDispatch();

  const getNowPlayingMovie = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
    const json = await data.json();
    //console.log(json.results);
    dispatch(addNowPlayingMovie(json.results));

  } 
  
  useEffect(() => {
    getNowPlayingMovie();
  },[]);
}

export default useNowPlayingMovie;