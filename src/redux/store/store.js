import { configureStore } from "@reduxjs/toolkit";
import storiesReducer from "../features/storiesSlice";
import musicsReducer from "../features/musicsSlice";
import animalsGameReducer from "../features/animalsGameSlice";

const store = configureStore({
  reducer: {
    stories: storiesReducer,
    musics: musicsReducer,
    animalsGame: animalsGameReducer,
  },
});

export default store;
