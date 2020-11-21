import { getAuthUserData } from "./auth-reducer";

let initialState = {
  initialized: false
};

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const appReducer = (state = initialState, action) => {
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

export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS
  };
}

export const initializeApp = () => (dispatch) => {
  Promise.all([dispatch(getAuthUserData())])
    .then(() => {
      dispatch(initializedSuccess());
    });
}

export default appReducer;


