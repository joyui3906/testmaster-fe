import { AxiosResponse } from 'axios';

export function getSimpleBooleanResponseResult(res: AxiosResponse) {
  return res.data?.content[0];
}

export function initLoginInfo(options?: Partial<LoginInfo>): LoginInfo {
  const defaults: LoginInfo = {
    name: '',
    email: '',
  };
  return {
    ...defaults,
    ...options,
  };
}
