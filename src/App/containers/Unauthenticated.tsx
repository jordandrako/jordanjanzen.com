import * as React from 'react';
import DocumentTitle from 'react-document-title';
import Banner, { BannerType } from '../components/Banner';
import { Row } from '../components/Page';

const Unathenticated = () => (
  <DocumentTitle title='Please Log In'>
    <Row>
      <Banner bannerType={BannerType.Alert} title='Not Logged In.'>
        Please log in to view this page.
      </Banner>
    </Row>
  </DocumentTitle>
);

export default Unathenticated;
