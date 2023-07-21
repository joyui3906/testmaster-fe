export const REGEX = {
  NO_EN_KR: /[^a-z|A-Z|ㄱ-ㅎ|가-힣ㄱ-ㅎㅏ-ㅣ|ㆍᆢ]/g,
  NO_NUMBER: /[^0-9]/g,
  // 영문, 숫자, 특수문자 20자 이내 두 가지 이상 조합
  PWD_PATTERN: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*_+=])[A-Za-z\d~!@#$%^&*_+=]{8,}$/g,
  PWD_FILTER_PATTERN: /[^a-z|A-Z|0-9|~!@#$%^&*_+=]/g,
  EMAIL: /.+@.+\..+/g,
  HYPHEN: /-/g,
};
