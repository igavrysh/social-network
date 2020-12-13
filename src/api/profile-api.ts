import { instance } from './api'
import { ProfileType } from "../types/types";

export const profileAPI = {
  getProfile(userId: number) {
    let url = `profile/${userId}`;
    return instance.get<ProfileType>(url)
      .then(res => res.data);
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
