import axios from "axios";
import { User } from "../types/user";

export interface UserInfo {
  accessToken: string;
  user: User;
}

export interface ApiResponse<T> {
  result: boolean;
  message: string;
  data: T;
}

const infoUser = JSON.parse(localStorage.getItem("user") as string) as UserInfo;

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1", // Replace with your API base URL
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${infoUser?.accessToken}`,
  },
});
