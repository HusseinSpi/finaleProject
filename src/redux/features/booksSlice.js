import { createSlice } from "@reduxjs/toolkit";
import {getAllBooks} from "../thunk/booksThunk";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        //  console.log("Redux State Fulfilled:", action.payload);
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAllBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default booksSlice.reducer;
