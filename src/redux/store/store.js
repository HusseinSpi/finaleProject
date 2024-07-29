import { configureStore } from "@reduxjs/toolkit";
import storiesReducer from "../features/storiesSlice";
import musicsReducer from "../features/musicsSlice";
import animalsGameReducer from "../features/animalsGameSlice";
import chatWithAiReducer from "../features/chatWithAiSlice";
import userReducer from "../features/userSlice";
<<<<<<< HEAD
import currentUserReducer from "../features/currentUserSlice";
import wordReducer from "../features/wordsSlice";
import scoreReducer from "../features/scoreSlice";
=======
>>>>>>> origin/DanielaBranch

const store = configureStore({
  reducer: {
    stories: storiesReducer,
    musics: musicsReducer,
    animalsGame: animalsGameReducer,
    chatWithAi: chatWithAiReducer,
    user: userReducer,
<<<<<<< HEAD
    currentUser: currentUserReducer,
    words: wordReducer,
    score: scoreReducer,
=======
>>>>>>> origin/DanielaBranch
  },
});

export default store;
