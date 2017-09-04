import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import styled from 'styled-components';
import { layout } from '../theme/variables';

import PageTitle from '../components/PageTitle';

const Main = styled.main`flex: ${layout.mainFlex};`;

const Home = () => (
  <DocumentTitle>
    <Main>
      <PageTitle title="Home" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi omnis rerum eligendi
        blanditiis quisquam animi ducimus maiores voluptatem repellendus, sapiente asperiores at
        unde debitis quos culpa obcaecati sed, corrupti nulla!
      </p>
    </Main>
  </DocumentTitle>
);

Home.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Home;
