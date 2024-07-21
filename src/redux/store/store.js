import { configureStore } from "@reduxjs/toolkit";
import storiesReducer from "../features/storiesSlice";
import musicsReducer from "../features/musicsSlice";

const store = configureStore({
  reducer: {
    stories: storiesReducer,
    musics: musicsReducer,
  },
});

export default store;
