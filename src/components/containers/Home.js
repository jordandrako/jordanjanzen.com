import React from 'react';
import DocumentTitle from 'react-document-title';

import { MainContainer, Main, Row } from '../Grid';
import PageTitle from '../PageTitle';
import CodeLoader from '../../theme/images/codeLoader.svg';

const Home = () => (
  <DocumentTitle title="Jordan Janzen">
    <MainContainer>
      <PageTitle title="Home" />
      <Main>
        <Row>
          <img src={CodeLoader} className="CodeLoader" alt="loading..." />
        </Row>
      </Main>
    </MainContainer>
  </DocumentTitle>
);

export default Home;
