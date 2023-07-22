import { useMutation, useQuery } from '@tanstack/react-query';
import { login, logout, refreshToken, register } from '../../apis/auth';
import { QUERY_KEYS } from '../../constants/keys';
import { ApiError } from '../../utils/error';

export function useLogin(options?: QueryOptions) {
  return useMutation<LoginResponse, ApiError, LoginParam>(QUERY_KEYS.LOGIN, login, { ...options });
}

export function useLogout(options?: QueryOptions) {
  return useMutation<SimpleBooleanResponse, ApiError>(QUERY_KEYS.LOGOUT, logout, { ...options });
}

export function useRefreshToken(param: LoginInfo, options?: QueryOptions) {
  return useQuery<LoginResponse, ApiError>(QUERY_KEYS.REFRESH_TOKEN, refreshToken, {
    ...options,
  });
}

export function useRegister() {
  return useMutation<RegisterResponse, ApiError, RegisterParam>(QUERY_KEYS.REGISTER, register);
}