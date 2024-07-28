import { createSlice } from "@reduxjs/toolkit";
import { getAllWords } from "../thunk/wordsThunk";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllWords.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllWords.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAllWords.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default wordsSlice.reducer;
