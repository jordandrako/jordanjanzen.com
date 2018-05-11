export interface ISidebar {}

export interface ISidebarProps {
  isMobile: boolean;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export interface ISidebarStyleProps {}
