import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";

export const getAllVideos = createAsyncThunk(
  "video/getAllVideos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`videos`);
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);
