import { PropsWithChildren, useMemo, useReducer } from 'react';
import { getMe as getUser } from '@api/auth.api';
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '@utils/storage.util';
import toast from '@utils/toast';
import authReducer from './auth.reducer';
import { AuthActionType } from './auth.actions';
import AuthState, { AUTH_STATE, IAuthContextProps } from './auth.state';

export default function AuthProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(authReducer, AUTH_STATE);

  const value = useMemo<IAuthContextProps>(
    () => ({
      ...state,
      login: (data) => {
        const {
          user: { email, _id: id, firstName, lastName },
          access_token: accessToken,
        } = data;
        const name = `${firstName} ${lastName}`;
        setLocalStorage('access_token', accessToken);
        toast({ message: `Welcome ${name}!`, type: 'success' });
        dispatch({
          type: AuthActionType.LOGIN,
          payload: {
            email,
            name,
            accessToken,
            id,
          },
        });
      },
      logout: () => {
        dispatch({ type: AuthActionType.LOGOUT });
        removeLocalStorage('access_token');
      },
      checkLogin: async () => {
        const accessToken = getLocalStorage('access_token');
        if (accessToken) {
          dispatch({ type: AuthActionType.AUTHENTICATED });
          const { email, _id: id, firstName, lastName } = await getUser();
          const name = `${firstName} ${lastName}`;
          toast({ message: `Welcome Back, ${name}!`, type: 'success' });
          dispatch({
            type: AuthActionType.LOGIN,
            payload: {
              email,
              name,
              accessToken,
              id,
            },
          });
        }
      },
    }),
    [state]
  );

  return <AuthState.Provider value={value}>{children}</AuthState.Provider>;
}
