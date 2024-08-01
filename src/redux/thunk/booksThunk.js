import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";

export const getAllBooks = createAsyncThunk(
  "book/getAllBooks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`books`);
      console.log("API Response:", response.data.data);
      return response.data.data;
    } catch (err) {
      console.error(`Error fetching books:`, err);
      return rejectWithValue(err.response?.data);
    }
  }
);