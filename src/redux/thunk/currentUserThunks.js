import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";

axios.defaults.withCredentials = true;

export const getCurrentUser = createAsyncThunk(
  "navbarSlice/getCurrentUser",
  async () => {
    try {
      const response = await axios.get("users/me");
      return response.data;
    } catch (error) {
      console.log("error");
      throw error;
    }
  }
);
