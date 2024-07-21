import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";

export const getAllMusic = createAsyncThunk(
  "musics/fetchMusicByType",
  async ({ rejectWithValue }) => {
    try {
      const response = await axios.get(`musics`);
      return response.data.data;
    } catch (err) {
      console.error(`Error fetching musics:`, err);
      return rejectWithValue(err.response?.data);
    }
  }
);
