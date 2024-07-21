import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";

export const getMusicByType = createAsyncThunk(
  "musics/fetchMusicByType",
  async (type, { rejectWithValue }) => {
    try {
      const response = await axios.get(`musics?type=${type}`);
      return response.data.data;
    } catch (err) {
      console.error(`Error fetching musics of type ${type}:`, err);
      return rejectWithValue(err.response?.data);
    }
  }
);
