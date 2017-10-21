import React from 'react';
import styled from 'styled-components';

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
