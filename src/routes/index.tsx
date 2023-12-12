import {lazy} from 'react';
import Loadable from '@src/components/common/Loadable';
import {Route, Routes, useLocation} from 'react-router-dom';
import {PATH} from '@src/constants/path';
import AuthRoute from './AuthRoute';
import NoAuthRoute from './NoAuthRoute';


const Register = Loadable(lazy(() => import('@src/pages/register/RegisterPage')));
const LoginPage = Loadable(lazy(() => import('@src/pages/login/LoginPage')));

// search
const SearchPage = Loadable(lazy(() => import('@src/pages/search/SearchPage')));

// error
const PageNotFound = Loadable(lazy(() => import('@src/pages/error/Page404')));

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
                <Route element={<AuthRoute/>}>
                    {/* MY PAGE */}

                </Route>

                {/* 비로그인 상태일때만 접근 가능 */}
                <Route element={<NoAuthRoute/>}>
                    <Route path={PATH.REGISTER.routerPattern} element={<Register/>}/>
                    <Route path={PATH.LOGIN.routerPattern} element={<LoginPage/>}/>
                    <Route path={PATH.SEARCH.routerPattern} element={<SearchPage/>}/>

                </Route>


                <Route path="*" element={<PageNotFound/>}/>

            </Routes>
            {background && (
                <Routes>

                </Routes>
            )}
        </>
    );
};

export default Router;
