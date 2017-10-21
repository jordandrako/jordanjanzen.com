import React from 'react';

import { Page, Row, Hero } from '../../theme/grid';
import StyledLoader from '../StyledLoader';

const Home = () => (
  <Page title="Home">
    <Hero />
    <Row>
      <StyledLoader />
    </Row>
  </Page>
);

export default Home;
