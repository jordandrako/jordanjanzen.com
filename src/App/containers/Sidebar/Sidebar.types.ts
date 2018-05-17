export interface ISidebar {}

export interface ISidebarProps {
  isMobile: boolean;
  login: () => void;
  logout: () => void;
  undo: () => void;
}

export interface ISidebarStyleProps {}
