export interface IPageTitleProps {
  title: string;
  ext?: boolean;
  prevPage: {
    name: string;
    path: string;
  } | null;
}
