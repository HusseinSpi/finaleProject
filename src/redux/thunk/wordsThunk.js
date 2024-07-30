import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";

export const getAllWords = createAsyncThunk("words/getAllWords", async () => {
  try {
    const response = await axios.get("words");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching words:", error.message);
    throw error;
  }
});
