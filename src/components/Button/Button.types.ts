export interface IButton {}

export interface IButtonProps {
  arrows?: boolean | string;
  bg?: string;
  buttonType?: ButtonType;
  children?:
    | string
    | JSX.Element
    | (string | JSX.Element)[]
    | (() => string | JSX.Element);
  circle?: boolean;
  className?: string;
  color?: string;
  componentRef?: (component: IButton | null) => void;
  del?: boolean;
  href?: string;
  large?: boolean;
  pill?: boolean;
  rel?: string;
  small?: boolean;
  style?: {};
  target?: string;
  text?: string;
  to?: string;
  type?: string;
  wide?: boolean;
  onClick?: () => void;
  icon?: boolean;
}

export interface IButtonStyleProps {
  arrows?: boolean | string;
  bg?: string;
  buttonType?: ButtonType;
  circle?: boolean;
  className?: string;
  color?: string;
  del?: boolean;
  large?: boolean;
  pill?: boolean;
  small?: boolean;
  wide?: boolean;
}

export enum ButtonType {
  primary,
  secondary,
  cta,
  login,
  success,
  warn,
  danger,
  delete,
  submit,
}
