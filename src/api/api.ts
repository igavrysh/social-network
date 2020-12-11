import axios from "axios";
import { ProfileType } from "../types/types";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "3d1ff9da-8bc0-4533-ba31-4c93b3db5b95",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    let url = `users?page=${currentPage}&count=${pageSize}`;
    return instance.get(url).then((response) => response.data);
  },

  follow(userId: number) {
    let url = `follow/${userId}`;
    return instance.post(url, {});
  },

  unfollow(userId: number) {
    let url = `follow/${userId}`;
    return instance.delete(url);
  },
};

export const profileAPI = {
  getProfile(userId: number) {
    let url = `profile/${userId}`;
    return instance.get(url).then((response) => {
      return response.data;
    });
  },

  getStatus(userId: number) {
    let url = `profile/status/${userId}`;
    return instance.get(url).then((status) => {
      return status;
    });
  },

  updateStatus(status: string) {
    let url = `profile/status`;
    return instance.put(url, { status: status }).then((status) => {
      return status;
    });
  },

  savePhoto(photoFile: any) {
    let formData = new FormData();
    formData.append("image", photoFile);
    return instance.put("profile/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  saveProfile(profile: ProfileType) {
    return instance.put("profile", profile);
  },
};

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10
}

type MeResponseType = {
  data: { 
    id: number, 
    email: string, 
    login: string
  }
  resultCode: ResultCodesEnum
  messages: Array<string>
}

export type LoginResponseType = {
  date: {
    userId: number
  }
  resultCode: ResultCodesEnum | ResultCodeForCaptcha
  messages: Array<string>
}

export const authAPI = {
  me() {
    let url = `auth/me`;
    return instance.get<MeResponseType>(url).then(res => res.data);
  },

  login(email: string, password: string, rememberMe: boolean, captcha: string | null = null) {
    return instance
      .post<LoginResponseType>(
        "auth/login", 
        { email, password, rememberMe, captcha })
      .then(res => res.data);
  },

  logout() {
    return instance.delete("auth/login");
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};
