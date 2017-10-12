import React from 'react';

import { Page, Row } from '../Grid';
import CodeLoader from '../../images/codeLoader.svg';

const Home = () => (
  <Page title="Home">
    <Row>
      <img src={CodeLoader} className="CodeLoader" alt="loading..." />
    </Row>
  </Page>
);

export default Home;
