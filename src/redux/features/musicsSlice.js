import { createSlice } from "@reduxjs/toolkit";
import { getMusicByType } from "../thunk/musicsThunk";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const musicsSlice = createSlice({
  name: "musics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMusicByType.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMusicByType.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getMusicByType.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default musicsSlice.reducer;
