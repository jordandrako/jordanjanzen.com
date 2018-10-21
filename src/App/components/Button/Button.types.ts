export interface IButtonProps {
  arrows?: boolean | string;
  bg?: string;
  buttonType?: ButtonType;
  children?: React.ReactNode;
  circle?: boolean;
  className?: string;
  color?: string;
  disabled?: boolean;
  href?: string;
  large?: boolean;
  pill?: boolean;
  rel?: string;
  small?: boolean;
  style?: object;
  target?: string;
  text?: string;
  to?: string;
  type?: string;
  wide?: boolean;
  onClick?: (
    e?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;

  /**
   * Use a font-awesome icon name, or false to turn off social button icon.
   */
  icon?: string | boolean;
  iconReverse?: boolean | string;
}

export interface IButtonStyleProps {
  arrows?: boolean | string;
  bg?: string;
  buttonType?: ButtonType;
  circle?: boolean;
  className?: string;
  color?: string;
  disabled?: boolean;
  large?: boolean;
  pill?: boolean;
  small?: boolean;
  wide?: boolean;
  icon?: boolean | string;
  iconReverse?: boolean | string;
}

export enum ButtonType {
  Cta,
  Danger,
  Delete,
  Login,
  Primary,
  Secondary,
  Submit,
  Subtle,
  Success,
  Warn,
}

export enum SocialSites {
  codepen,
  facebook,
  github,
  google,
  linkedin,
  twitter,
}

export interface ISocialButtonProps extends IButtonProps {
  social: SocialSites;
}
