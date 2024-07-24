import { configureStore } from "@reduxjs/toolkit";
import storiesReducer from "../features/storiesSlice";
import musicsReducer from "../features/musicsSlice";
import animalsGameReducer from "../features/animalsGameSlice";
import chatWithAiReducer from "../features/chatWithAiSlice";
import userReducer from "../features/userSlice";
import currentUserReducer from "../features/currentUserSlice";

const store = configureStore({
  reducer: {
    stories: storiesReducer,
    musics: musicsReducer,
    animalsGame: animalsGameReducer,
    chatWithAi: chatWithAiReducer,
    user: userReducer,
    currentUser: currentUserReducer,
  },
});

export default store;
