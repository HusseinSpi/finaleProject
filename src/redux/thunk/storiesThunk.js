import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";

export const getAllStories = createAsyncThunk(
  "stories/fetchStories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("stories");
      return response.data.data;
    } catch (err) {
      console.error("Error fetching stories:", err);
      return rejectWithValue(err.response?.data);
    }
  }
);
