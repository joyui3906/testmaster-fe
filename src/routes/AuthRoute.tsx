import Loadable from '@src/components/common/Loadable';
import useAuth from '@src/hooks/useAuth';
import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

const LoginRequiredPage = Loadable(lazy(() => import('@src/pages/error/LoginRequiredPage')));

const AuthRoute = () => {
  // hooks
  const { isLogin } = useAuth();

  return isLogin() ? <Outlet /> : <LoginRequiredPage />;
};
export default AuthRoute;
