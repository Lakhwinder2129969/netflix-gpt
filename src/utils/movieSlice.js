import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovie:[],
        movieTrailer: [],
    },
    reducers: {
        addNowPlayingMovie (state , action) {
            state.nowPlayingMovie = action.payload;
        },
        addMovieTrailer (state , action) {
            state.movieTrailer = action.payload;
        },
    }
});

export const {addNowPlayingMovie , addMovieTrailer} = movieSlice.actions

export default movieSlice.reducer;