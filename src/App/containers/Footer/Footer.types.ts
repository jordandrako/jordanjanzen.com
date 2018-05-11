export interface IFooter {}

export interface IFooterProps {
  isLoggedIn: boolean;
  isMobile: boolean;
  login: () => void;
  logout: () => void;
}

export interface IFooterStyleProps {}
