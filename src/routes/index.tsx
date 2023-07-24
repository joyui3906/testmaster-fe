import { lazy } from 'react';
import Loadable from '@src/components/common/Loadable';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { PATH } from '@src/constants/path';
import AuthRoute from './AuthRoute';
import NoAuthRoute from './NoAuthRoute';



export interface LocationState {
  background?: any;
}

const Router = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const background = state?.background;

  return (
    <>
      <Routes location={background || location}>

        {/* 권한 필요 페이지 */}
        <Route element={<AuthRoute />}>
          {/* MY PAGE */}

        </Route>

        {/* 비로그인 상태일때만 접근 가능 */}
        <Route element={<NoAuthRoute />}>




        </Route>


      </Routes>
      {background && (
        <Routes>

        </Routes>
      )}
    </>
  );
};

export default Router;
