import { createSlice } from "@reduxjs/toolkit";
import { getAllAnimalsGame } from "../thunk/animalsGameThunk";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const animalsGameSlice = createSlice({
  name: "animalsGame",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAnimalsGame.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllAnimalsGame.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAllAnimalsGame.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default animalsGameSlice.reducer;
