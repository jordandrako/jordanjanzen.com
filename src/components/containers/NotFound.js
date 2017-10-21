import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../Banner';

import { Page, Row } from '../../theme/grid';

const NotFound = () => (
  <Page title="404">
    <Row>
      <Banner type="error">Sorry, I couldn't find that page.</Banner>
      <p>
        Think something should be here or maybe you clicked on a bugged{' '}
        <span role="img" aria-label="bug">
          🐛
        </span>{' '}
        link?<br />
        <Link to="/">Contact me.</Link>
      </p>
    </Row>
  </Page>
);

export default NotFound;
