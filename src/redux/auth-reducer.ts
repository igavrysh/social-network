import { stopSubmit } from "redux-form";
import { authAPI } from "../api/auth-api";
import { ResultCodeForCaptchaEnum, ResultCodesEnum } from '../api/api'
import { securityAPI } from "../api/security-api";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null, // if null, then captcha is not required
};

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SN/auth/SET_USER_DATA':
    case 'SN/auth/GET_CAPTCHA_URL_SUCCES':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

/*
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
*/


/*
type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCES
  payload: { 
    captchaUrl: string 
  }
}
*/

export const actions = {
  setAuthUserData: (
    userId: number | null, 
    email: string | null, 
    login: string | null, 
    isAuth: boolean, 
    captchaUrl: string | null) => {
    return {
      type: 'SN/auth/SET_USER_DATA',
      payload: {
        userId,
        email,
        login,
        isAuth,
        captchaUrl
      }
    } as const
  },

  getCaptchaUrlSuccess: (captchaUrl: string) => {
    return {
      type: 'SN/auth/GET_CAPTCHA_URL_SUCCES',
      payload: {
        captchaUrl,
      },
    } as const
  }
}

export const getAuthUserData = (): ThunkType => async (dispatch, getState) => {
  let response = await authAPI.me();
  if (response.resultCode === ResultCodesEnum.Success) {
    let { id, login, email } = response.data;
    dispatch(actions.setAuthUserData(id, email, login, true, null));
  }
};

export const login = (
  email: string, 
  password: string, 
  rememberMe: boolean, 
  captcha: string): ThunkType => async (dispatch) => {
     
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

export const logout = (): ThunkType => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(actions.setAuthUserData(null, null, null, false, null));
  }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  let data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};


export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>

export default authReducer;
