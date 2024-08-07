import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";

export const appointmentsBooking = createAsyncThunk(
  "videoCall/appointmentsBooking",
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

export const getAllAppointments = createAsyncThunk(
  "videoCall/getAllAppointments",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`video-call`);
      // console.log(response.data.data);
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);
