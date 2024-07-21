import { createSlice } from "@reduxjs/toolkit";
import { getAllMusic } from "../thunk/musicsThunk";

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
      .addCase(getAllMusic.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllMusic.fulfilled, (state, action) => {
        //  console.log("Redux State Fulfilled:", action.payload);
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAllMusic.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default musicsSlice.reducer;
