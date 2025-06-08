import { createSlice } from "@reduxjs/toolkit";


const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch: false,
    },
    reducers:{
        toggleGptSearcheView (state) {
            state.showGptSearch = !state.showGptSearch;
        },
    },

});

export const {toggleGptSearcheView} = GptSlice.actions;
export default  GptSlice.reducer;