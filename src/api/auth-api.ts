import { instance, ResultCodeForCaptchaEnum, ResultCodesEnum } from './api'
import { APIResponseType } from './api'

type MeResponseDataType = {
  id: number, 
  email: string, 
  login: string
}

export type LoginResponseDataType = {
  userId: number
}

export const authAPI = {
  me() {
    let url = `auth/me`;
    return instance.get<APIResponseType<MeResponseDataType>>(url).then(res => res.data);
  },

  login(email: string, password: string, rememberMe: boolean, captcha: string | null = null) {
    return instance
      .post<APIResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodeForCaptchaEnum>>(
        "auth/login", 
        { email, password, rememberMe, captcha })
      .then(res => res.data);
  },

  logout() {
    return instance.delete("auth/login");
  },
};