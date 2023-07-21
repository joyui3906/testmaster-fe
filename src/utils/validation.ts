import { REGEX } from '@src/constants/regex';
import { VALIDATION_RESULT } from '@src/constants/result';

export const isNameValid = (name?: string): ValidationResult => {
  if (!name || name === '') {
    return VALIDATION_RESULT.NAME_EMPTY;
  }
  if (name.length > 10) {
    return VALIDATION_RESULT.NAME_LONG_LENGTH;
  }
  return VALIDATION_RESULT.SUCCESS;
};

export const isPhoneValid = (phone?: string): ValidationResult => {
  if (!phone || phone === '') {
    return VALIDATION_RESULT.PHONE_EMPTY;
  }
  if (phone.length < 8) {
    return VALIDATION_RESULT.PHONE_SHORT_LENGTH;
  }
  if (phone.length > 11) {
    return VALIDATION_RESULT.PHONE_LONG_LENGTH;
  }
  if (phone.replace(REGEX.NO_NUMBER, '') === '') {
    return VALIDATION_RESULT.PHONE_ONLY_NUMBER;
  }
  return VALIDATION_RESULT.SUCCESS;
};

export const isEmailValid = (email?: string): ValidationResult => {
  if (!email || email === '') {
    return VALIDATION_RESULT.EMAIL_EMPTY;
  }
  if (email.match(REGEX.EMAIL) === null) {
    return VALIDATION_RESULT.EMAIL_INVALID_FORMAT;
  }
  return VALIDATION_RESULT.SUCCESS;
};

export const isPwdValid = (pwd?: string | null): ValidationResult => {
  if (!pwd || pwd === '') {
    return VALIDATION_RESULT.PWD_EMPTY;
  }
  if (pwd.replace(REGEX.PWD_FILTER_PATTERN, '') === '') {
    return VALIDATION_RESULT.PWD_EMPTY;
  }
  if (pwd.match(REGEX.PWD_PATTERN) === null) {
    return VALIDATION_RESULT.PWD_INVALID_FORMAT;
  }
  return VALIDATION_RESULT.SUCCESS;
};

export const isPwdCheckValid = (param: CheckPwdParam): ValidationResult => {
  if (param.init === false) {
    return VALIDATION_RESULT.NONE;
  }
  if (!param.pwdCheck || param.pwdCheck === '') {
    return VALIDATION_RESULT.PWD_EMPTY;
  }
  if (param.pwd !== param.pwdCheck) {
    return VALIDATION_RESULT.PWD_CHECK_DIFFERENT;
  }
  return VALIDATION_RESULT.SUCCESS;
};