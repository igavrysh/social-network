import { stopSubmit } from "redux-form";
import { authAPI } from "../api/auth-api";
import { ResultCodeForCaptchaEnum, ResultCodesEnum } from '../api/api'
import { securityAPI } from "../api/security-api";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCES = "samurai-network/auth/GET_CAPTCHA_URL_SUCCES";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null, // if null, then captcha is not required
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCES:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

type SetAuthUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  captchaUrl: string | null
}

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA,
  payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (
  userId: number | null, 
  email: string | null, 
  login: string | null, 
  isAuth: boolean, 
  captchaUrl: string | null): SetAuthUserDataActionType => {
  return {
    type: SET_USER_DATA,
    payload: {
      userId,
      email,
      login,
      isAuth,
      captchaUrl
    },
  };
};

type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCES
  payload: { 
    captchaUrl: string 
  }
}

export const getCaptchaUrlSuccess = (
  captchaUrl: string): GetCaptchaUrlSuccessActionType => {
  return {
    type: GET_CAPTCHA_URL_SUCCES,
    payload: {
      captchaUrl,
    },
  };
};

export const getAuthUserData = () => async (dispatch: any) => {
  let response = await authAPI.me();
  if (response.resultCode === ResultCodesEnum.Success) {
    let { id, login, email } = response.data;
    dispatch(setAuthUserData(id, email, login, true, null));
  }
};

export const login = (
  email: string, 
  password: string, 
  rememberMe: boolean, 
  captcha: string) => async (dispatch: any) => {
  let data = await authAPI
    .login(email, password, rememberMe, captcha);
  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(getAuthUserData());
  } else {
    if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
      dispatch(getCaptchaUrl());
    }
    let message =
    data.messages.length > 0
        ? data.messages[0]
        : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false, null));
  }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
  let response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;
