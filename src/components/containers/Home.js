import React from 'react';
import DocumentTitle from 'react-document-title';

import { MainColumn, Main, Row } from '../Grid';
import PageTitle from '../PageTitle';
import CodeLoader from '../../theme/images/codeLoader.svg';

const Home = () => (
  <DocumentTitle title="Jordan Janzen">
    <MainColumn>
      <PageTitle title="Home" />
      <Main>
        <Row>
          <img src={CodeLoader} className="CodeLoader" alt="loading..." />
        </Row>
      </Main>
    </MainColumn>
  </DocumentTitle>
);

export default Home;
