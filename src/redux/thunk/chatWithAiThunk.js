import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";

export const getReplyFromAiChat = createAsyncThunk(
  "openai/GetReplyFromAiChat",
  async (message, { rejectWithValue }) => {
    try {
      const response = await axios.post(`openai`, { message });
      // console.log("API Response:", response.data.data);
      return response.data.data;
    } catch (err) {
      console.error(`Error fetching openai:`, err);
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
