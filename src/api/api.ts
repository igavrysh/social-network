import axios from "axios";
import { UserType } from "../types/types";

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodeForCaptchaEnum {
  CaptchaIsRequired = 10
}

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "3d1ff9da-8bc0-4533-ba31-4c93b3db5b95",
  },
});

export type GetItemsType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}

export type ResponseType<D = {}, RC = ResultCodesEnum> = {
  data: D 
  messages: Array<string>
  resultCode: RC
}