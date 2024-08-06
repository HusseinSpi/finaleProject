import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";

export const getAllDraws = createAsyncThunk(
  "Draw/fetchDraws",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`draws`);
      console.log("API Response:", response.data.data);
      return response.data.data;
    } catch (err) {
      console.error(`Error fetching draws:`, err);
      return rejectWithValue(err.response?.data);
    }
  }
);
