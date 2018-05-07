export interface IRow {
  full?: boolean;
  child?: boolean;
}

export interface IFlex {
  column?: boolean;
  wrap?: boolean;
  align?: string;
  justify?: string;
}

export interface IPageProps {
  title: string;
  ext?: string;
  children: React.ReactChildren;
}
