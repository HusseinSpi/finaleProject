import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";

export const getAllArticles = createAsyncThunk(
  "video/getAllArticles",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`articles`);
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);
