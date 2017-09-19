import React from 'react';
import DocumentTitle from 'react-document-title';

import { MainColumn, Main, Row } from '../Grid';
import PageTitle from '../PageTitle';

const NotFound = () => (
  <DocumentTitle title="Jordan Janzen | Not Found">
    <MainColumn>
      <PageTitle title="404 Not Found" />
      <Main>
        <Row />
      </Main>
    </MainColumn>
  </DocumentTitle>
);

export default NotFound;
