import React from 'react';
import DocumentTitle from 'react-document-title';

import Main from '../Main';
import PageTitle from '../PageTitle';

const NotFound = () => (
  <DocumentTitle title="Jordan Janzen | Not Found">
    <Main>
      <PageTitle title="404 Not Found" />
    </Main>
  </DocumentTitle>
);

export default NotFound;
