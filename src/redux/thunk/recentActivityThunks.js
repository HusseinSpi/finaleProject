import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";

axios.defaults.withCredentials = true;

export const getRecentActivity = createAsyncThunk(
  "activity/fetchRecentActivity",
  async () => {
    try {
      const response = await axios.get("recent-activities");
      return response.data;
    } catch (error) {
      null;
      throw error;
    }
  }
);

export const createRecentActivity = createAsyncThunk(
  "activity/createRecentActivity",
  async (activityData, { rejectWithValue }) => {
    try {
      const response = await axios.post("recent-activities", activityData);
      return response.data;
    } catch (error) {
      null;
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
