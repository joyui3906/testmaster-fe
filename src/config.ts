const APP_MODE = {
  local: 'local',
  development: 'development',
  production: 'production',
  test: 'test',
};

const AppConfig = {
  MODE: process.env.REACT_APP_MODE,
  API: {
    API_HOST: process.env.REACT_APP_API_HOST || 'http://localhost:3000',
  },
  EXTERNAL_LINK: {
    APPLICANT_LIST: process.env.REACT_APP_EXTERNAL_LINK_APPLICANT_LIST,
  },
};

export function isLocal() {
  return AppConfig.MODE === APP_MODE.local;
}

export function isDev() {
  return AppConfig.MODE === APP_MODE.development;
}

export function isProd() {
  return AppConfig.MODE === APP_MODE.production;
}

export function isTest() {
  return AppConfig.MODE === APP_MODE.test;
}

export default AppConfig;
