import * as React from 'react';
import DocumentTitle from 'react-document-title';
import { Main, MainContainer } from './Grid';
import { IPageProps } from './Page.types';
import PageTitle from './PageTitle';

export const Page = (props: IPageProps) => {
  const docTitle =
    props.title === 'Home' ? 'Jordan Janzen' : `${props.title} | Jordan Janzen`;

  return (
    <DocumentTitle title={docTitle}>
      <MainContainer>
        <PageTitle title={props.title} ext={props.ext} />
        <Main>{props.children}</Main>
      </MainContainer>
    </DocumentTitle>
  );
};
