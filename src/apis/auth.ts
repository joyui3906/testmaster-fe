import axiosInstance from '@src/utils/axios';
import URL from '@const/api';
import { makeEmptyApiError } from '@src/utils/error';
import { isEmailValid, isNameValid, isPhoneValid, isPwdCheckValid, isPwdValid } from '@src/utils/validation';
import { VALIDATION_RESULT } from '@src/constants/result';
import { getSimpleBooleanResponseResult } from '.';

export const login = async (param: LoginParam) => {
  const res = await axiosInstance.request<LoginResponse>({
    ...URL.AUTH.LOGIN,
    data: { ...param },
  });
  return res.data;
};

export const logout = async (): Promise<SimpleBooleanResponse> => {
  const res = await axiosInstance.request({
    ...URL.AUTH.LOGOUT,
  });
  return getSimpleBooleanResponseResult(res);
};

export const refreshToken = async (): Promise<LoginResponse> => {
  const res = await axiosInstance.request<LoginResponse>({
    ...URL.AUTH.REFRESH_TOKEN,
  });
  return res.data;
};

export function checkRegisterParam(param: RegisterParam) {
  const error = makeEmptyApiError();

  const nameValidationResult = isNameValid(param.name);
  if (!nameValidationResult.isValid) {
    error.errors.push({
      message: nameValidationResult.helpMessage,
    });
  }

  const phoneResult = isPhoneValid(param.mobileNumber);
  if (!phoneResult.isValid) {
    error.errors.push({
      message: phoneResult.helpMessage,
    });
  }

  const emailResult = isEmailValid(param.email);
  if (!emailResult.isValid) {
    const isEmptyEmail = emailResult.helpMessage === VALIDATION_RESULT.EMAIL_EMPTY.helpMessage;
    const errorMessage = isEmptyEmail ? '이메일을 입력해주세요.' : emailResult.helpMessage;
    error.errors.push({
      message: errorMessage,
    });
  }

  const passwordResult = isPwdValid(param.password);
  if (!passwordResult.isValid) {
    error.errors.push({
      message: passwordResult.helpMessage,
    });
  }

  const passwordCheckResult = isPwdCheckValid({
    pwd: param.password,
    pwdCheck: param.passwordCheck,
    init: true,
  });
  if (!passwordCheckResult.isValid) {
    error.errors.push({
      message: passwordCheckResult.helpMessage,
    });
  }

  if (error.errors.length > 0) {
    throw error;
  }
}

export const register = async (param: RegisterParam) => {
  checkRegisterParam(param);
  const res = await axiosInstance.request({
    ...URL.AUTH.REGISTER,
    data: { ...param },
  });
  return res.data;
};