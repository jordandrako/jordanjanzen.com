import * as React from 'react';
import Banner, { BannerType } from '../components/Banner';
import { Page, Row } from './Grid/grid';

const Unathenticated = () => (
  <Page title="Please Log In">
    <Row>
      <Banner bannerType={BannerType.Alert} title="Not Logged In.">
        Please log in to view this page.
      </Banner>
    </Row>
  </Page>
);

export default Unathenticated;
