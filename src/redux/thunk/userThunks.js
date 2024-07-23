import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";
import { toast } from "react-toastify";

axios.defaults.withCredentials = true;

export const fetchUsersData = createAsyncThunk(
  "user/fetchUsersData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("users");
      return response.data;
    } catch (error) {
      toast.error("Failed to fetch users data");
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "user/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("users/me");
      console.log(response.data);
      return response.data;
    } catch (error) {
      toast.error("Failed to get current user");
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const signUpUser = createAsyncThunk(
  "user/signUpUser",
  async (
    { firstName, lastName, email, password, passwordConfirm },
    { rejectWithValue }
  ) => {
    const data = {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
    };
    try {
      const response = await axios.post("users/signup", data);
      toast.success("Signup successful!");
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      toast.error("Signup failed");
      console.error("Signup error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    const data = { email, password };
    try {
      const response = await axios.post("users/login", data);
      toast.success("Login successful!");
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      toast.error("Login failed");
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async ({ email }, { rejectWithValue }) => {
    const data = { email };
    try {
      const response = await axios.post("users/forgotPassword", data);
      toast.success("Password reset email sent");
      return response.data;
    } catch (error) {
      toast.error("Failed to send password reset email");
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async ({ resetToken, password, passwordConfirm }, { rejectWithValue }) => {
    const data = { password, passwordConfirm };
    try {
      const response = await axios.patch(
        `users/resetPassword/${resetToken}`,
        data
      );
      toast.success("Password reset successful");
      return response.data;
    } catch (error) {
      toast.error("Failed to reset password");
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
