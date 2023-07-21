const METHOD = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const AUTH_BASE = '/api/v1';

const URL = {
  AUTH: {
    LOGIN: {
      url: `${AUTH_BASE}/login`,
      method: METHOD.POST,
    },
    LOGOUT: {
      url: `${AUTH_BASE}/logout`,
      method: METHOD.POST,
    },
    REGISTER: {
      url: `${AUTH_BASE}/register`,
      method: METHOD.POST,
    },
    REFRESH_TOKEN: {
      url: `${AUTH_BASE}/token`,
      method: METHOD.GET,
    }
  }
};

export default URL;
