import React from 'react';
import DocumentTitle from 'react-document-title';

import { MainContainer, Main, Row } from '../Grid';
import PageTitle from '../PageTitle';
import Banner from '../Banner';

const Unathenticated = (props) => (
  <DocumentTitle title="Please Log In">
    <MainContainer>
      <PageTitle title="Please Log In" />
      <Main>
        <Row>
          <Banner type="alert" title="Not Logged In.">
            You aren't logged in. Please log in to view this page.
          </Banner>
        </Row>
      </Main>
    </MainContainer>
  </DocumentTitle>
);

export default Unathenticated;
