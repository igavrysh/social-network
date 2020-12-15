import { instance, APIResponseType } from './api'
import { PhotosType, ProfileType } from "../types/types";

type SavePhotoResponseDataType = {
  photos: PhotosType
}

export const profileAPI = {
  getProfile(userId: number) {
    let url = `profile/${userId}`;
    return instance.get<ProfileType>(url)
      .then(res => res.data);
  },

  getStatus(userId: number) {
    let url = `profile/status/${userId}`;
    return instance.get<string>(url)
      .then(res => res.data);
  },

  updateStatus(status: string) {
    let url = `profile/status`;
    return instance.put<APIResponseType>(url, { status: status })
      .then(res => res.data);
  },

  savePhoto(photoFile: File) {
    let formData = new FormData();
    formData.append("image", photoFile);
    return instance.put<APIResponseType<SavePhotoResponseDataType>>(
      "profile/photo", 
      formData, 
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(res => res.data);
  },

  saveProfile(profile: ProfileType) {
    return instance.put<APIResponseType>("profile", profile)
      .then(res => res.data);
  },
};
