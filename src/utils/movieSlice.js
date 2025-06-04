import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovie:[],
        movieTrailer: [],
        popularMovie: [],
    },
    reducers: {
        addNowPlayingMovie (state , action) {
            state.nowPlayingMovie = action.payload;
        },
        addMovieTrailer (state , action) {
            state.movieTrailer = action.payload;
        },
        addPopularMovie (state , action) {
            state.popularMovie = action.payload;
        },
    }
});

export const {addNowPlayingMovie , addMovieTrailer , addPopularMovie} = movieSlice.actions

export default movieSlice.reducer;