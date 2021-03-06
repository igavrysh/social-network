import { getAuthUserData } from "./auth-reducer";
//import { InferActionsTypes } from "./redux-store";

let initialState = {
  initialized: false
};

const appReducer = (
  state: InitialStateType = initialState, 
  action: any): InitialStateType => {
  switch (action.type) {
    case 'SN/APP/INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true
      };

    default:
      return state;
  }
}

export const actions = {
  initializedSuccess: () => {
    return {
      type: 'SN/APP/INITIALIZED_SUCCESS'
    } as const
  }
}

export const initializeApp = () => (dispatch: any) => {
  Promise.all([dispatch(getAuthUserData())])
    .then(() => {
      dispatch(actions.initializedSuccess());
    });
}

export default appReducer;

export type InitialStateType = typeof initialState
//type ActionsType = InferActionsTypes<typeof actions>
