import AppConfig from '@src/config';
import axios from 'axios';
import { ApiError, makeApiError } from './error';
import { getSession } from './jwt';

const ErrorMessages = {
  500: '예상하지 못한 문제가 발생했어요.\n일시적인 문제일 수 있으니 잠시 후 다시 이용해 주세요.\n문제가 계속 발생할 경우 채팅 상담으로 문의해 주세요.',
};

const axiosInstance = axios.create({
  baseURL: AppConfig.API.API_HOST,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getSession();
    if (config.headers) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (err) => Promise.reject(err),
);

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response) {
      if (err.response.status === 500) {
        return Promise.reject(makeApiError(ErrorMessages[500], 500));
      }
      return Promise.reject(new ApiError('', err.response.status, err.response.data.errors));
    }
    // TODO : 공통 Error Handling logic 추가 필요 (404, 500...)
    return Promise.reject(err);
  },
);

export default axiosInstance;
