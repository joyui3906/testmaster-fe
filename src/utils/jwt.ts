import { STORAGE_KEYS } from '@const/keys';
import jwtDecode from 'jwt-decode';

// TODO : Expired Token 처리 필요

export const isTokenValid = (accessToken: string | null): TokenStatusType => {
  if (!accessToken) {
    return 'INVALID';
  }
  const decoded = jwtDecode<{ exp: number }>(accessToken);
  const curTime = Date.now() / 1000;
  if (!decoded.exp || decoded.exp > curTime) {
    return 'VALID';
  }
  return 'EXPIRED';
};

const setSession = (accessToken: string) => {
  if (!isTokenValid(accessToken)) {
    return false;
  }
  localStorage.setItem(STORAGE_KEYS.LOCAL_ACCESS_TOKEN, accessToken);
  return true;
};

const getSession = () => localStorage.getItem(STORAGE_KEYS.LOCAL_ACCESS_TOKEN);

const clearSession = () => {
  localStorage.removeItem(STORAGE_KEYS.LOCAL_ACCESS_TOKEN);
};

export { setSession, getSession, clearSession };
