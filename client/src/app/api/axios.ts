import axios, { AxiosInstance } from "axios";
import { httpConstants } from "@/constants/http";

export const client: AxiosInstance = axios.create({
  baseURL: httpConstants.API_URL,
  // withCredentials: true,
});
