import { createContext } from 'react';
import { ILoginResponse } from '@interfaces/api/auth.interface';

export interface IAuthStateUser {
  id: string;
  email: string;
  name: string;
}

export interface IAuthState {
  isAuthenticated: boolean;
  user: IAuthStateUser | null;
  accessToken: string | null;
}

export const AUTH_STATE: IAuthState = {
  user: null,
  isAuthenticated: false,
  accessToken: null,
};

export interface IAuthContextProps extends IAuthState {
  login: (data: ILoginResponse) => void;
  logout: () => void;
  checkLogin: () => Promise<void>;
}

const AuthState = createContext({} as IAuthContextProps);
AuthState.displayName = 'AuthState';

export default AuthState;
