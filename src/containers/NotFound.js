import React from 'react';
import DocumentTitle from 'react-document-title';

import Main from '../components/Main';
import PageTitle from '../components/PageTitle';

const NotFound = () => (
  <DocumentTitle title="Jordan Janzen | Not Found">
    <Main>
      <PageTitle title="404 Not Found" />
    </Main>
  </DocumentTitle>
);

export default NotFound;
