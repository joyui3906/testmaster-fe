import { GnbElevationType, GnbType } from '@src/components/common/gnb/Gnb.type';
import { LoginPageType } from '@src/pages/login/LoginPage.type';

export const GA_PATH_PREFIX = 'partner://';

interface PathSpec {
  routerPattern: string;
  getPath: (data?: any) => string;
  regex?: RegExp;
  gnbType: GnbType;
  open: boolean;
  elevation?: GnbElevationType;
}

type Page =
  | 'ROOT'
  | 'HOME'
  | 'REGISTER'
  | 'MY_PAGE'
  | 'MODIFY_MY_INFO'
  | 'LOGIN'
  | 'LOGIN_PAGE'
  | 'LOGIN_REQUIRED'
  | 'SEND_PASSWORD_RESET_EMAIL'
  | 'CHANGE_PASSWORD'
  | 404
  | 500;

type Path = {
  [key in Page]: PathSpec;
};

export const PATH: Path = {
  ROOT: {
    routerPattern: '/',
    getPath: () => '/',
    gnbType: 'default',
    open: true,
  },
  HOME: {
    routerPattern: '/',
    getPath: () => '/',
    gnbType: 'default',
    open: true,
  },
  REGISTER: {
    routerPattern: '/register',
    getPath: () => '/register',
    gnbType: 'simple',
    open: true,
  },
  MY_PAGE: {
    routerPattern: '/mypage',
    getPath: () => '/mypage',
    gnbType: 'default',
    open: true,
  },
  MODIFY_MY_INFO: {
    routerPattern: '/mypage/modify',
    getPath: () => '/mypage/modify',
    gnbType: 'default',
    open: true,
  },
  LOGIN: {
    routerPattern: '/login',
    getPath: () => '/login',
    gnbType: 'default',
    open: true,
  },
  LOGIN_PAGE: {
    routerPattern: '/login/:type',
    getPath: (type: LoginPageType) => `/login/${type}`,
    regex: /\/login\/.+/,
    gnbType: 'simple',
    open: true,
  },
  LOGIN_REQUIRED: {
    routerPattern: '/guard',
    getPath: () => '/guard',
    gnbType: 'simple',
    open: true,
  },
  SEND_PASSWORD_RESET_EMAIL: {
    routerPattern: '/password-reset/send-email',
    getPath: () => '/password-reset/send-email',
    gnbType: 'simple',
    open: true,
  },
  CHANGE_PASSWORD: {
    routerPattern: '/password-reset/:token',
    getPath: (token: string) => `/password-reset/${token}`,
    regex: /\/password-reset\/.+/,
    gnbType: 'simple',
    open: true,
  },
  404: {
    routerPattern: '/404',
    getPath: () => '/404',
    gnbType: 'default',
    open: true,
  },
  500: {
    routerPattern: '/500',
    getPath: () => '/500',
    gnbType: 'default',
    open: true,
  },
};

export const PATH_ARRAY: Array<PathSpec> = Object.values(PATH);

export function getPathSpec(url: string): PathSpec | null {
  const filtered = PATH_ARRAY.filter((spec) => {
    if (spec.regex) {
      return url.match(spec.regex);
    }
    return spec.routerPattern === url;
  });
  if (filtered.length > 0) {
    return filtered[0];
  }
  return null;
}

export function getGaPath(path: PathSpec) {
  const pathStr = path.getPath();
  return `${GA_PATH_PREFIX}${pathStr.substring(1, pathStr.length)}`;
}
