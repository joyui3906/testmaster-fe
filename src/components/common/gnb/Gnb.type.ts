export type GnbType = 'default' | 'simple' | 'saas';

export type GnbElevationType = 'pc' | 'mobile';

export type GnbMenuType = 'button' | 'drop-down';

export type GnbMenu = {
  title: string;
  subtitle?: string;
  GnbMenu: GnbMenuType;
};

export interface GnbProps extends BaseComponentProps {
  open: boolean;
  elevation?: GnbElevationType;
}
