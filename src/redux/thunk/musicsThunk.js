import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";

export const getAllMusic = createAsyncThunk(
  "music/fetchMusicByType",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`music`);
      // console.log("API Response:", response.data.data);
      return response.data.data;
    } catch (err) {
      console.error(`Error fetching music:`, err);
      return rejectWithValue(err.response?.data);
    }
  }
);
