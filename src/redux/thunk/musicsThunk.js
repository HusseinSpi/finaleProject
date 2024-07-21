import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";

export const getMusicByType = createAsyncThunk(
  "music/fetchMusicByType",
  async (type, { rejectWithValue }) => {
    try {
      const response = await axios.get(`music?type=${type}`);
      console.log(response.data);
      return response.data.data;
    } catch (err) {
      console.error(`Error fetching music of type ${type}:`, err);
      return rejectWithValue(err.response?.data);
    }
  }
);
