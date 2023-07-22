declare type ValidationResult = {
  isValid?: boolean;
  helpMessage: string;
};

// 패스워드 - 패스워드 체크 간 비교위한 Param
declare interface CheckPwdParam {
  pwd?: string | null;
  pwdCheck?: any;
  init: boolean;
}

declare const DividerDirection = {
  column: 'column',
  row: 'row',
} as const;

declare type DividerDirectionType = typeof DividerDirection[keyof typeof DividerDirection];

declare const FlexDirection = {
  column: 'column',
  row: 'row',
  rowReverse: 'row-reverse',
  columnReverse: 'column-reverse',
} as const;

declare type FlexDirectionType = typeof FlexDirection[keyof typeof FlexDirection];

declare const AlignItem = {
  stretch: 'stretch',
  center: 'center',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  baseline: 'baseline',
  initial: 'initial',
  inherit: 'inherit',
} as const;

declare type AlignItemType = typeof AlignItem[keyof typeof AlignItem];

declare const JustifyContent = {
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  center: 'center',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  spaceEvenly: 'space-evenly',
  initial: 'initial',
  inherit: 'inherit',
} as const;

declare type JustifyContentType = typeof JustifyContent[keyof typeof JustifyContent];

declare const Hint = {
  error: 'error',
  success: 'success',
};

declare type HintType = typeof Hint[keyof typeof Hint];

declare interface ListOrder {
  screeningStatus: ScreeningStatus;
  checkingStatus: CheckingStatus;
}
