// import { clearToken, getToken, setToken } from '@/core/utils';
// import authService from '@/services/AuthService';
import axios from "axios";

const Api = axios.create({
  baseURL: import.meta.env.VITE_API_HOST ?? "http://localhost:8090",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Max-Age": "600",
    "Access-Control-Allow-Origin": "*",
  },
});

export type GeneralResponse = {
  message: string;
  status: boolean;
};

export type ErrorCodeResponse = {
  code?: number;
  message?: string;
};

export type ErrorResponse = {
  message?: string;
  description?: string;
};

export type PaginationResponse = {
  numberOfElements: number;
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
};

export type PaginationType = {};

export type DataResponse<T extends object | null | undefined> =
  GeneralResponse &
    ErrorResponse &
    (T extends null ? {} : { data: T; pagination?: PaginationType });

Api.interceptors.request.use((config) => {
  //   let token = getToken();
  //   if (token) {
  //     config.headers.Authorization = `Bearer ${token.accessToken}`;
  //   }
  return config;
});

let flagExpiredDateToken: boolean = false;

Api.interceptors.response.use(
  (res) => {
    flagExpiredDateToken = false;
    return res?.data;
  },
  async (err) => {
    // const response = err.response?.data;
    // if (response?.error === "Unauthorized" && response.status === 401) {
    //   if (!flagExpiredDateToken) {
    //     flagExpiredDateToken = true;
    //     // let token = getToken();
    //     // if (token) {
    //     //   token.accessToken = token?.refreshToken ?? '';
    //     //   setToken(token);
    //     // }
    //     // const promiseRefreshToken = await authService.refreshToken();
    //     // const accessToken = await promiseRefreshToken;
    //     // token = accessToken;
    //     // if (token) {
    //     //   setToken(token);
    //     // }
    //   }
    //   return Api(err.config);
    // } else if (
    //   response?.error === "Not Acceptable" &&
    //   response.status === 406
    // ) {
    //   //   clearToken();
    //   location.reload();
    // } else {
    // throw response;
    // }
  }
);

export default Api;
