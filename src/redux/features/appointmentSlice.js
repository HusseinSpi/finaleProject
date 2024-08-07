import { createSlice } from "@reduxjs/toolkit";
import { appointmentBooking } from "../thunk/appointmentThunk";

const appointmentSlice = createSlice({
  name: "appointmentSlice",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(appointmentBooking.pending, (state) => {
        state.status = "loading";
      })
      .addCase(appointmentBooking.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      })
      .addCase(appointmentBooking.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default appointmentSlice.reducer;
