/*
 * 굳이 isValid 없이 msg 존재여부만으로 판단이 가능할 수 있지만,
 * 유효성을 통과한 경우에도 '사용 가능한 OOO 입니다' 와 같은 케이스와 같이 확장성 고려하여 상태 분리하였음
 */
export const VALIDATION_RESULT = {
  NONE: {
    isValid: undefined,
    helpMessage: '',
  },
  SUCCESS: {
    isValid: true,
    helpMessage: '',
  },
  NAME_EMPTY: {
    isValid: false,
    helpMessage: '이름을 입력해주세요.',
  },
  NAME_LONG_LENGTH: {
    isValid: false,
    helpMessage: '이름은 10자를 초과할 수 없습니다.',
  },
  PHONE_EMPTY: {
    isValid: false,
    helpMessage: '휴대폰 번호를 입력해주세요.',
  },
  PHONE_ONLY_NUMBER: {
    isValid: false,
    helpMessage: '숫자만 입력해주세요.',
  },
  PHONE_SHORT_LENGTH: {
    isValid: false,
    helpMessage: '휴대폰 번호를 다시 확인해주세요.',
  },
  PHONE_LONG_LENGTH: {
    isValid: false,
    helpMessage: '휴대폰 번호는 11자를 초과할 수 없습니다.',
  },
  EMAIL_EMPTY: {
    isValid: false,
    helpMessage: '이메일을 입력해주세요.',
  },
  EMAIL_INVALID_FORMAT: {
    isValid: false,
    helpMessage: '사용할 수 없는 이메일 형식입니다.',
  },
  PWD_EMPTY: {
    isValid: false,
    helpMessage: '비밀번호를 입력해 주세요.',
  },
  PWD_INVALID_FORMAT: {
    isValid: false,
    helpMessage: '영문, 숫자, 특수문자 중 2가지 이상 조합하여 8~20자로 입력해 주세요.',
  },
  PWD_CHECK_EMPTY: {
    isValid: false,
    helpMessage: '비밀번호를 입력해 주세요.',
  },
  PWD_CHECK_DIFFERENT: {
    isValid: false,
    helpMessage: '비밀번호와 일치하지 않습니다.',
  },
  COMPANY_NAME_EMPTY: {
    isValid: false,
    helpMessage: '회사명을 입력해 주세요.',
  },
  CORP_REG_NUM_EMPTY: {
    isValid: false,
    helpMessage: '사업자등록번호를 입력해 주세요.',
  },
  CORP_REG_NUM_SHORT: {
    isValid: false,
    helpMessage: '사업자등록번호 10자리를 입력해 주세요.',
  },
  CORP_CONTACT_EMPTY: {
    isValid: false,
    helpMessage: '대표번호를 입력해 주세요.',
  },
  ADDRESS_EMPTY: {
    isValid: false,
    helpMessage: '주소를 입력해 주세요.',
  },
  IS_NOT_NUMBER: {
    isValid: false,
    helpMessage: '숫자만 입력해 주세요.',
  },
  TITLE_EMPTY: {
    isValid: false,
    helpMessage: '제목을 입력해 주세요.',
  },
};
