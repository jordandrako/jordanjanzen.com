export interface IPageProps {
  title: string;
  ext?: boolean;
  children: React.ReactNode;
  prevPage: {
    name: string;
    path: string;
  } | null;
}
