import React from 'react';
import DocumentTitle from 'react-document-title';

import { MainContainer, Main, Row } from '../Grid';
import PageTitle from '../PageTitle';
import Banner from '../Banner';

const GoBack = () => {
  // this.context.router.goBack();
  console.log('Going Back');
};

const About = () => (
  <DocumentTitle title="Please Log In">
    <MainContainer>
      <PageTitle title="Please Log In" />
      <Main>
        <Row>
          <Banner
            type="alert"
            title="Not Logged In."
            action={() => GoBack()}
            actionText="Go Back"
          >
            You aren't logged in. Please log in to view this page.
          </Banner>
        </Row>
      </Main>
    </MainContainer>
  </DocumentTitle>
);

export default About;
