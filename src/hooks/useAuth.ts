import { QUERY_KEYS } from '../constants/keys';
import { PATH } from '../constants/path';
import { LoginInfoState, OpenLoginDialogState } from '../states/GlobalState';
import { ApiError, makeApiError } from '../utils/error';
import { clearSession, getSession, isTokenValid as getTokenStatus, setSession } from '../utils/jwt';
import { invalidateQueries } from '../utils/query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useLogin, useLogout, useRefreshToken } from './queries/auth';

const useAuth = () => {
  // states
  const [loginInfo, setLoginInfo] = useRecoilState<LoginInfo>(LoginInfoState);
  const [isOpenLoginDialog, setOpenLoginDialog] = useRecoilState<boolean>(OpenLoginDialogState);
  const [isError, setError] = useState(false);
  const [doRefreshToken, setDoRefreshToken] = useState(false);

  // hooks
  const navigate = useNavigate();

  // functions
  const setToken = (token?: string) => {
    if (token) {
      return setSession(token);
    }
    return false;
  };

  const getLoginStatus = (): LoginStatusType => {
    const token = getSession();
    if (!token) {
      return 'not-login';
    }
    const tokenStatus = getTokenStatus(getSession());
    if (tokenStatus === 'EXPIRED') {
      return 'token-expired';
    }
    if (tokenStatus === 'INVALID') {
      return 'token-invalid';
    }
    return 'login';
  };

  const isLogin = (): boolean => getLoginStatus() === 'login';

  // queries
  const loginApi = useLogin({
    onSuccess: (res: LoginResponse) => {
      setError(false);
      return res;
    },
    onError: (err: ApiError) => {
      setError(true);
    },
  });

  const logoutApi = useLogout();

  const refreshTokenApi = useRefreshToken(loginInfo, {
    enabled: doRefreshToken,
    onSuccess: (data: LoginResponse) => {
      setToken(data.token);
      setLoginInfo({ ...data });
    },
  });

  const login = async (loginParam: LoginParam) => {
    const response = await loginApi.mutateAsync(loginParam);
    setToken(response.token);
    setLoginInfo({ ...response });
    setOpenLoginDialog(false);
  };

  const loginByRegisterResponse = (response: RegisterResponse) => {
    const result = setToken(response.token);
    setLoginInfo({ ...response });
    setOpenLoginDialog(false);
    return result;
  };

  const logout = async () => {
    try {
      const response = await logoutApi.mutateAsync();
      if (!response.result) {
        throw makeApiError('로그아웃에 실패하였습니다.');
      }
    } finally {
      // 성공 여부와 관계없이 무조건 로그아웃
      setLoginInfo({
        name: '',
        email: '',
      });
      clearSession();
      navigate(PATH.HOME.getPath());
    }
  };

  const refreshToken = async () => {
    // 중복 로드 방지, 비로그인 상태 걸러내기
    if (refreshTokenApi.isFetching || !isLogin()) {
      return;
    }
    // 캐시 만료처리
    invalidateQueries(QUERY_KEYS.REFRESH_TOKEN);
    if (doRefreshToken) {
      // 이전 결과 초기화
      setDoRefreshToken(false);
    }
    // 로그인 되어있는 경우, 불러오는 중이 아닌 경우에만 리프레시 토큰 쿼리 활성화
    setDoRefreshToken(!refreshTokenApi.isFetching && !doRefreshToken);
  };

  const openLoginDialog = () => {
    if (getLoginStatus() !== 'login') {
      setOpenLoginDialog(true);
    }
  };

  const closeLoginDialog = () => {
    setOpenLoginDialog(false);
  };

  return {
    login,
    loginByRegisterResponse,
    logout,
    refreshToken,
    isLogin,
    loginInfo,
    getLoginStatus,
    isLoading: loginApi.isLoading,
    isError,
    openLoginDialog,
    closeLoginDialog,
  };
};

export default useAuth;
