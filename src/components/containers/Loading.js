import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';

import { MainColumn, Main, Row } from '../Grid';
import PageTitle from '../PageTitle';
import Banner from '../Banner';

import Pacman from '../../theme/images/Pacman.svg';

const Loading = ({ isLoading }) => {
  // Handle the loading state
  if (isLoading) {
    return (
      <DocumentTitle title="Loading...">
        <MainColumn>
          <PageTitle title="Loading..." />
          <Main>
            <Row>
              <img src={Pacman} className="pacman" alt="loading..." />
            </Row>
          </Main>
        </MainColumn>
      </DocumentTitle>
    );
  }
  // Handle the error state
  return (
    <DocumentTitle title="😥 Sorry">
      <MainColumn>
        <PageTitle title="😥 Sorry" />
        <Main>
          <Row>
            <Banner
              type="error"
              text="There seems to have been a problem loading this page..."
              action="reload"
            />
          </Row>
        </Main>
      </MainColumn>
    </DocumentTitle>
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loading;
