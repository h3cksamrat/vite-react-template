/* eslint-disable no-case-declarations */
import { AuthActionType } from './auth.actions';
import { IAuthState } from './auth.state';

interface IPayload {
  id: string;
  email: string;
  name: string;
  accessToken: string;
}

interface IAction {
  type: AuthActionType;
  payload?: IPayload;
}

const authReducer = (state: IAuthState, action: IAction): IAuthState => {
  switch (action.type) {
    case AuthActionType.LOGIN:
      if (!action.payload) return state;
      const { email, name, id, accessToken } = action.payload;
      return {
        ...state,
        isAuthenticated: true,
        user: { email, name, id },
        accessToken,
      };
    case AuthActionType.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case AuthActionType.AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default authReducer;
