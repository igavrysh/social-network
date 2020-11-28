import * as Axios from "axios";

const instance = Axios.create({
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

  follow(userId) {
    let url = `follow/${userId}`;
    return instance.post(url, {});
  },

  unfollow(userId) {
    let url = `follow/${userId}`;
    return instance.delete(url);
  },
};

export const profileAPI = {
  getProfile(userId) {
    let url = `profile/${userId}`;
    return instance.get(url).then((response) => {
      return response.data;
    });
  },

  getStatus(userId) {
    let url = `profile/status/${userId}`;
    return instance.get(url).then((status) => {
      return status;
    });
  },

  updateStatus(status) {
    let url = `profile/status`;
    return instance.put(url, { status: status }).then((status) => {
      return status;
    });
  },

  savePhoto(photoFile) {
    let formData = new FormData();
    formData.append("image", photoFile);
    return instance.put("profile/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  saveProfile(profile) {
    return instance.put("profile", profile);
  },
};

export const authAPI = {
  me() {
    let url = `auth/me`;
    return instance.get(url);
  },

  login(email, password, rememberMe, captcha = null) {
    return instance.post("auth/login", { email, password, rememberMe, captcha });
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
