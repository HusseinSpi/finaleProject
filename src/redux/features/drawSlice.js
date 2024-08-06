import { createSlice } from "@reduxjs/toolkit";
import { getAllDraws } from "../thunk/drawThunk";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const drawsSlice = createSlice({
  name: "draws",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllDraws.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllDraws.fulfilled, (state, action) => {
        //  console.log("Redux State Fulfilled:", action.payload);
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAllDraws.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default drawsSlice.reducer;
