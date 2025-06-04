import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    movies.nowPlayingMovie && (
    <div className='bg-black w-screen'>
      <div className='-mt-44 pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie}/> 
      <MovieList title={"Trending"} movies={movies.nowPlayingMovie}/> 
      <MovieList title={"Popoler"} movies={movies.popularMovie}/> 
      <MovieList title={"Up Coming"} movies={movies.nowPlayingMovie}/> 
      <MovieList title={"Horror"} movies={movies.nowPlayingMovie}/> 
      </div>
    </div>
    )
  )
}

export default SecondaryContainer;
