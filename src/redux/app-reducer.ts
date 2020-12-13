import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitialStateType = {
  initialized: boolean
}

let initialState: InitialStateType = {
  initialized: false
};

const appReducer = (
  state: InitialStateType = initialState, 
  action: any): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };

    default:
      return state;
  }
}

type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessActionType => {
  return {
    type: INITIALIZED_SUCCESS
  };
}

export const initializeApp = () => (dispatch: any) => {
  Promise.all([dispatch(getAuthUserData())])
    .then(() => {
      dispatch(initializedSuccess());
    });
}

export default appReducer;


