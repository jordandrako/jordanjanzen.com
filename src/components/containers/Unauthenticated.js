import React from 'react';

import { Page, Row } from '../Grid';
import Banner from '../Banner';

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
