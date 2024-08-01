import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";

export const getAllBooks = createAsyncThunk(
  "book/getAllBooks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`books`);
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);
