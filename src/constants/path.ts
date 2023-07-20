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
  | 'SAAS_INTRODUCE'
  | 'PARTNER_INTRODUCE'
  | 'PRICING'
  | 'REGISTER'
  | 'SAAS_REGISTER'
  | 'MY_PAGE'
  | 'MODIFY_MY_INFO'
  | 'APPLICATION_LIST'
  | 'APPLICATION_DETAIL'
  | 'QUEST_ADD'
  | 'QUEST_ACCOUNT_REGISTER'
  | 'QUEST_LIST'
  | 'QUEST_DETAIL'
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
  PRICING: {
    routerPattern: '/pricing',
    getPath: () => '/pricing',
    gnbType: 'default',
    open: true,
    elevation: 'pc',
  },
  SAAS_INTRODUCE: {
    routerPattern: '/introduce/saas',
    getPath: () => '/introduce/saas',
    gnbType: 'saas',
    open: true,
  },
  PARTNER_INTRODUCE: {
    routerPattern: '/introduce/partner',
    getPath: () => '/introduce/partner',
    gnbType: 'default',
    open: true,
  },
  REGISTER: {
    routerPattern: '/register',
    getPath: () => '/register',
    gnbType: 'simple',
    open: true,
  },
  SAAS_REGISTER: {
    routerPattern: '/saas/register',
    getPath: () => '/saas/register',
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
  APPLICATION_LIST: {
    routerPattern: '/quest/:uuid/application',
    getPath: (uuid?: string) => `/quest/${uuid}/application`,
    gnbType: 'default',
    open: true,
  },
  APPLICATION_DETAIL: {
    routerPattern: '/quest/:uuid/application/:applicationId',
    getPath: (uuid?: string, applicationId?: string) => `/quest/${uuid}/application/${applicationId}`,
    gnbType: 'default',
    open: true,
  },
  QUEST_ADD: {
    routerPattern: '/quest/add',
    getPath: (uuid?: string) => `/quest/add${uuid ? `/${uuid}` : ''}`,
    gnbType: 'default',
    open: true,
  },
  QUEST_ACCOUNT_REGISTER: {
    routerPattern: '/quest/register',
    getPath: () => '/quest/register',
    gnbType: 'simple',
    open: true,
  },
  QUEST_LIST: {
    routerPattern: '/quest/list',
    getPath: () => '/quest/list',
    gnbType: 'default',
    open: true,
  },
  QUEST_DETAIL: {
    // 여기 수정 필요할듯?
    routerPattern: '/quest/detail',
    getPath: (uuid?: string) => `/quest/detail${uuid ? `/${uuid}` : ''}`,
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
