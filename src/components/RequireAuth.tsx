import { PropsWithChildren, ReactNode, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthState from '@store/auth/auth.state';

export default function RequireAuth({ children }: PropsWithChildren): ReactNode {
  const { isAuthenticated } = useContext(AuthState);
  const location = useLocation();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login', {
      replace: true,
      state: {
        path: location.pathname,
      },
    });
    return null;
  }

  return children;
}
