import Loadable from '@src/components/common/Loadable';
import useAuth from '@src/hooks/useAuth';
import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

const PageNotFound = Loadable(lazy(() => import('@src/pages/error/Page404')));

const NoAuthRoute = () => {
  // hooks
  const { isLogin } = useAuth();

  return isLogin() ? <PageNotFound /> : <Outlet />;
};

export default NoAuthRoute;
