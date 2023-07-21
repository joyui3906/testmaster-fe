import { initLoginInfo } from '@src/apis';
import { GnbType } from '@src/components/common/gnb/Gnb.type';
import { STATE_KEYS } from '@src/constants/keys';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const LoginInfoState = atom<LoginInfo>({
  key: STATE_KEYS.LOGIN_INFO,
  default: initLoginInfo(),
  effects_UNSTABLE: [persistAtom],
});

export const IsMobileGnbMenuOpen = atom<boolean>({
  key: STATE_KEYS.IS_MOBILE_GNB_MENU_OPEN,
  default: false,
});

export const IsGnbOpen = atom<boolean>({
  key: STATE_KEYS.IS_GNB_OPEN,
  default: true,
});

export const CurrentGnbType = atom<GnbType>({
  key: STATE_KEYS.ENABLE_SIMPLE_GNB,
  default: 'default',
});

export const OpenLoginDialogState = atom<boolean>({
  key: STATE_KEYS.OPEN_LOGIN_DIALOG,
  default: false,
});

export const ApplicationListFilterQuestionAnswerArray = atom<Array<string> | null>({
  key: STATE_KEYS.APPLICATION_LIST_FILTER_QUESTION_ANSWER_ARRAY,
  default: null,
});

/* Pricing Page */
export const SaasPricingSuggestionCountIndex = atom<number>({
  key: STATE_KEYS.SAAS_PRICING_SUGGESTION_COUNT_INDEX,
  default: 0,
});

export const SaasPricingTableOpenedAccordionIndex = atom<number>({
  key: STATE_KEYS.SAAS_PRICING_TABLE_OPENDED_ACCORDION_INDEX,
  default: -1,
});
/* End of Pricing Page */
