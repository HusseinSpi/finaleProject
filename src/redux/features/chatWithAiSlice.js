import { createSlice } from "@reduxjs/toolkit";
import { getReplyFromAiChat } from "../thunk/chatWithAiThunk";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const chatWithAiSlice = createSlice({
  name: "chatWithAi",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReplyFromAiChat.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getReplyFromAiChat.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getReplyFromAiChat.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default chatWithAiSlice.reducer;
