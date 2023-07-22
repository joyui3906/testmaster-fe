declare interface LoginParam {
  email: string;
  password: string;
}

declare interface LoginResponse {
  email: string;
  name: string;
  token: string;
}

declare interface RegisterParam {
  email: string;
  isPrivacyAllowed: boolean;
  isSmsEmailAllowed: boolean;
  isTermsAgreed: boolean;
  mobileNumber: string;
  name: string;
  password: string;
  passwordCheck: string;
  type?: RegisterType;
}

declare interface RegisterResponse {
  email: string;
  name: string;
  token: string;
}

declare const TokenStatus = {
  valid: 'VALID',
  invalid: 'INVALID',
  expired: 'EXPIRED',
} as const;

declare type TokenStatusType = typeof TokenStatus[keyof typeof TokenStatus];

declare const LoginStatus = {
  logined: 'login',
  notLogin: 'not-login',
  tokenInvalid: 'token-invalid',
  tokenExpired: 'token-expired',
} as const;

declare type LoginStatusType = typeof LoginStatus[keyof typeof LoginStatus];

declare const MemberStatus = {
  live: 'LIVE',
  withdrawal: 'WITHDRAWAL',
} as const;

declare type MemberStatusType = typeof MemberStatus[keyof typeof MemberStatus];
