import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";

export const getAllVideos = createAsyncThunk(
  "video/getAllVideos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`videos`);
      console.log("API Response:", response.data.data);
      return response.data.data;
    } catch (err) {
      console.error(`Error fetching videos:`, err);
      return rejectWithValue(err.response?.data);
    }
  }
);
