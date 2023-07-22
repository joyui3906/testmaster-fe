// for react query
export const QUERY_KEYS = {
  LOGIN: ['login'],
  LOGOUT: ['logout'],
  REFRESH_TOKEN: ['refresh_token'],
  REGISTER: ['register'],
  REGISTER_SAAS: ['register_saas'],
  DEACTIVATE_ACCOUNT: ['deactivate_account'],
  GET_MY_INFO: ['get_my_info'],
  MODIFY_MY_INFO: ['modify_my_info'],
  CHANGE_PASSWORD: ['change_password'],
  GET_CORP_INFO: (corporateRegistrationNumber: string) => ['get_corp_info', corporateRegistrationNumber] as const,
  VERIFY_CORP_REGISTRATION_NUMBER: (corpRegistrationNumber: string) =>
    ['verify_corp_registration_number', corpRegistrationNumber] as const,
  REQUEST_MOBILE_VERIFICATION: ['request_mobile_verification'],
  CHECK_MOBILE_VERIFICATION_CODE: ['check_mobile_verification_code'],
  QUEST_DETAIL: ['quest_detail'],
  QUEST_SAVE_QNA: ['save_qna'],
  SIMPLE_QUEST: ['simple_quest'],
  GET_APPLICATION_DETAIL: (applicationId: string) => ['get_application_detail', applicationId],
  PATCH_CHANGE_SCREENING_STATUS: ['patch_change_screening_status'],
  GET_QUESTION_FILTER: ['question_filter'],
  GET_CHECKING_STATUS: ['checking_status'],
  GET_SCREENING_STATUS: ['screening_status'],
  SEND_PASSWORD_RESET_MAIL: ['send_password_reset_mail'],
  VERIFY_PASSWORD_RESET_TOKEN: (token: string) => ['verify_password_reset_token', token],
  RESET_PASSWORD: ['reset_password'],
  MODIFY_QUEST_TITLE: ['modify_quest_title'],
};

// for recoil
export const STATE_KEYS = {
  LOGIN_INFO: 'LOGIN_INFO',
  IS_MOBILE_GNB_MENU_OPEN: 'IS_MOBILE_GNB_MENU_OPEN',
  IS_GNB_OPEN: 'IS_GNB_OPEN',
  ENABLE_SIMPLE_GNB: 'ENABLE_SIMPLE_GNB',
  OPEN_LOGIN_DIALOG: 'OPEN_LOGIN_DIALOG',
  APPLICATION_LIST_FILTER_SCREENING_STATUS: 'APPLICATION_LIST_FILTER_SCREENING_STATUS',
  APPLICATION_LIST_FILTER_CHECKING_STATUS: 'APPLICATION_LIST_FILTER_CHECKING_STATUS',
  APPLICATION_LIST_FILTER_QUESTION_ANSWER: 'APPLICATION_LIST_FILTER_QUESTION_ANSWER',
  APPLICATION_LIST_FILTER_QUESTION_ANSWER_ARRAY: 'APPLICATION_LIST_FILTER_QUESTION_ANSWER_ARRAY',
  SAAS_PRICING_SUGGESTION_COUNT_INDEX: 'SAAS_PRICING_SUGGESTION_COUNT_INDEX',
  SAAS_PRICING_TABLE_OPENDED_ACCORDION_INDEX: 'SAAS_PRICING_TABLE_OPENDED_ACCORDION_INDEX',
};

// for storage (format : LOCAL/SESSION_{key})
export const STORAGE_KEYS = {
  LOCAL_ACCESS_TOKEN: 'accessToken',
};
