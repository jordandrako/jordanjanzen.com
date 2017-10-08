import React from 'react';
import DocumentTitle from 'react-document-title';

import { MainContainer, Main, Row } from '../Grid';
import PageTitle from '../PageTitle';

const NotFound = () => (
  <DocumentTitle title="Jordan Janzen | Not Found">
    <MainContainer>
      <PageTitle title="404 Not Found" />
      <Main>
        <Row />
      </Main>
    </MainContainer>
  </DocumentTitle>
);

export default NotFound;
