import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import GptReducer from "./GptSlice"
import lang from "./languageConstant";
import configReducer from "./configSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: GptReducer,
        config: configReducer,

    },
});

export default appStore;