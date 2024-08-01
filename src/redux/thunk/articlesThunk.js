import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";

export const getAllArticles = createAsyncThunk(
  "video/getAllArticles",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`articles`);
      console.log("API Response:", response.data.data);
      return response.data.data;
    } catch (err) {
      console.error(`Error fetching articles:`, err);
      return rejectWithValue(err.response?.data);
    }
  }
);
