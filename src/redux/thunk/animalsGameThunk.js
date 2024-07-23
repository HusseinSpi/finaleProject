import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";

export const getAllAnimalsGame = createAsyncThunk(
  "animalsGame/fetchAnimalsGameByType",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`animalsGame`);
      console.log(response);
      return response.data.data;
    } catch (err) {
      console.error(`Error fetching animalsGame:`, err);
      return rejectWithValue(err.response?.data);
    }
  }
);
