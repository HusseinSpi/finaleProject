import { createSlice } from "@reduxjs/toolkit";
import { getAllStories } from "../thunk/storiesThunk";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllStories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllStories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAllStories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default storiesSlice.reducer;
