import { User } from "@/interfaces/task-interfaces";
import { setIsLoggedIn } from "@/store/reducers/authSlice";
import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { FormEvent } from "react";
import { toast } from "react-toastify";

class AuthServices {
  async login(
    payload: User,
    navigate: (arg: string) => void,
    dispatch: Dispatch,
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    try {
      console.log("Attempting login with:", payload);
      const response = await axios.post(
        `${window.location.origin}/api/auth/login`,
        payload
      );
      console.log("Login response:", response.data);
      if (response) {
        const token = response.data.data.token;
        localStorage.setItem("token", token);
        localStorage.getItem("token");
        dispatch(setIsLoggedIn(true));
        navigate("/");
        toast.success("Login Successful!");
      }
    } catch (error: any) {
      console.error("Login error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Login failed!");
    }
  }

  signup = async (
    userInfo: User,
    navigate: (args: string) => void,
    dispatch: Dispatch,
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      console.log("Attempting signup with:", userInfo);
      const response = await axios.post(
        `${window.location.origin}/api/auth/signup`,
        userInfo
      );
      console.log("Signup response:", response.data);
      if (response) {
        const token = response.data.data.token;
        localStorage.setItem("token", token);
        dispatch(setIsLoggedIn(true));
        navigate("/");
        toast.success("Signup successful!");
      }
    } catch (error: any) {
      console.error("Signup error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Signup failed!");
    }
  };

  logout = async (dispatch: Dispatch) => {
    try {
      localStorage.removeItem("token");
      dispatch(setIsLoggedIn(false));
      toast.success("Log out Successful!");
    } catch (error) {
      console.log(error);
    }
  };
}

const authServices = new AuthServices();
export default authServices;
