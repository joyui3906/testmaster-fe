declare interface SvgProps {
  style?: CssProperties | undefined;
  size?: number;
  color?: string;
}

declare interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

declare interface SimpleInputProps {
  helperText?: string;
  value?: string;
  errorText?: string;
  placeholder?: string;
  maxLength?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (e) => void;
  required?: boolean;
  children?: React.ReactNode;
  multiline?: boolean;
}

declare interface PasswordInputProps extends SimpleInputProps {
  onClickForgotPasswordHelper?: () => void;
  showForgotPasswordHelper?: boolean;
}

declare interface InputViewProps {
  // TODO : initValue 제거
  initValue?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onValueChanged?: (value: any) => void; // filter 된 결과값 파라미터로 받음
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  placeholder?: string;
  maxLength?: number;
  multiline?: boolean;
  disabled?: boolean;
}

declare interface ValidationInputViewProps extends InputViewProps {
  value?: any;
  onStatusChanged?: (status: ValidationResult) => void;
  marginBottom?: number;
  helperText?: string;
  unit?: string;
  extraMessage?: string;
  showExtraMessage?: boolean;
  hintMessage?: string;
  hintType?: HintType;
  isExtraError?: boolean;
  extraButtonLabel?: string;
  extraButtonWidth?: string;
  showExtraButton?: boolean;
  disableExtraButton?: boolean;
  disableCheckIcon?: boolean;
  fixErrorTextHeight?: boolean;
  showHintMessage?: boolean;
  endAdornment?: React.ReactNode;
  required?: boolean;
  onClickExtraButton?: () => void;
  maxRows?: number;
  minRows?: number;
}

declare interface ValidationProps {
  status?: ValidationResult;
  onValidationStatusChanged?: (status: ValidationResult) => void; // validation status changed
  type?: ValidationType;
}

declare interface ValidationComponentProps extends ValidationInputViewProps, ValidationProps {}

declare interface OldDialogProps {
  title?: string;
  open: boolean;
  children?: React.ReactNode;
  action?: () => React.ReactNode;
  onClose: () => void;
}

declare interface LoggedInMenuProps {
  onModifyClick?: () => void;
  onMyPageClick?: () => void;
  onLogoutClick: () => void;
}

declare interface NonLoginMenuProps {
  subscriptionButtonClassName?: string;
  onGoRegisterClick: () => void;
  onLoginClick: () => void;
  onSubscriptionClick?: () => void;
}

// For Quest Add (Answer Forms)
declare interface AnswerFormValue {
  answerId: number;
  value: string;
  answerType: AnswerType;
  isMandatory: boolean;
}

declare interface AnswerFormComponentProps {
  answerId: number;
  answerType: AnswerType;
  answerDataType?: AnswerDataType;
  maxLength?: number;
  isMandatory: boolean;
  isNumeric: boolean;
  minValue?: number;
  maxValue?: number;
  answer?: any;
  codes: Array<Code>;
  style?: React.CSSProperties;
  placeholder?: string;
  notifyChange: (value: AnswerFormValue) => void;
}

declare interface BoxProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  flexDirection?: FlexDirectionType;
  alignItems?: AlignItemType;
  justifyContent?: JustifyContentType;
  padding?: string;
  width?: string;
  height?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  flexBasis?: string;
  flexGrow?: string;
  gap?: string;
  root?: boolean;
}

declare interface SelectProps extends BoxProps {
  value?: string;
  onSelectChange: (e: SelectChangeEvent<string>) => void;
}

declare interface BaseDialogProps<T> extends BaseComponentProps {
  open?: boolean;
  onClose?: (result: T) => void;
}
