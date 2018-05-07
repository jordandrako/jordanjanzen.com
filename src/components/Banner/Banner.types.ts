import * as React from "react";

export interface IBanner {
  showHide: () => void;
}

export interface IBannerProps extends React.HTMLAttributes<HTMLElement> {
  componentRef?: (component: IBanner | null) => void;
  children: string | JSX.Element;
  type: string;
  title?: string;
  className?: string;
}

export interface IBannerStyleProps {
  type?: string;
}
