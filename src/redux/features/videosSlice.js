import { createSlice } from "@reduxjs/toolkit";
import { getAllVideos } from "../thunk/videosThunk";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};
const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllVideos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllVideos.fulfilled, (state, action) => {
        //  console.log("Redux State Fulfilled:", action.payload);
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAllVideos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      });
  },
});
export default videosSlice.reducer