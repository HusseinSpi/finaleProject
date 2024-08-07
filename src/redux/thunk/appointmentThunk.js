import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";

export const appointmentBooking = createAsyncThunk(
  "videoCall/appointmentBooking",
  async (bookingData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `video-call/generate-room-url`,
        bookingData
      );
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);
