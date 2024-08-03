import { createSlice } from "@reduxjs/toolkit";
import { getAllArticles } from "../thunk/articlesThunk";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllArticles.fulfilled, (state, action) => {
        //  console.log("Redux State Fulfilled:", action.payload);
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAllArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      });
  },
});
export default articlesSlice.reducer;
