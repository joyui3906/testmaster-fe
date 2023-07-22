// TODO : Key의 Type도 제네릭으로 받을 수 있는지.
declare interface Pair<V> {
  [key: string]: V;
}

declare const ValidationTypes = {
  none: 'none',
  name: 'name',
  phone: 'phone',
  email: 'email',
  password: 'password',
  passwordCheck: 'passwordCheck',
  corpName: 'corpName',
  corpRegistrationNumber: 'corpRegistrationNumber',
  representNumber: 'representNumber',
  address: 'address',
  title: 'title',
} as const;

declare type ValidationType = (typeof ValidationTypes)[keyof typeof ValidationTypes];

declare const PhoneVerifyStatus = {
  none: 'none',
  modify: 'modify',
  codeRequested: 'codeRequested',
  success: 'success',
} as const;

declare type PhoneVerifyStatusType = (typeof PhoneVerifyStatus)[keyof typeof PhoneVerifyStatus];

declare interface LoginInfo {
  name: string;
  email: string;
}
