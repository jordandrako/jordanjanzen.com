import React from 'react';

import Banner from '../Banner';

import { Page, Row } from '../../theme/grid';

const Unathenticated = () => (
  <Page title="Please Log In">
    <Row>
      <Banner type="alert" title="Not Logged In.">
        Please log in to view this page.
      </Banner>
    </Row>
  </Page>
);

export default Unathenticated;
