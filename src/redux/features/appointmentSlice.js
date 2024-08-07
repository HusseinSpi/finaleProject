import { createSlice } from "@reduxjs/toolkit";
import {
  appointmentsBooking,
  getAllAppointments,
} from "../thunk/appointmentThunk";

const appointmentsSlice = createSlice({
  name: "appointmentsSlice",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(appointmentsBooking.pending, (state) => {
        state.status = "loading";
      })
      .addCase(appointmentsBooking.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      })
      .addCase(appointmentsBooking.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getAllAppointments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllAppointments.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      })
      .addCase(getAllAppointments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default appointmentsSlice.reducer;
