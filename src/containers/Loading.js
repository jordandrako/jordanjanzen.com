import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';

import Main from '../components/Main';
import PageTitle from '../components/PageTitle';
import Banner from '../components/Banner';

import Pacman from '../theme/images/Pacman.svg';

const Loading = ({ isLoading }) => {
  // Handle the loading state
  if (isLoading) {
    return (
      <DocumentTitle title="Loading...">
        <Main>
          <PageTitle title="Loading..." />
          <img src={Pacman} className="pacman" alt="loading..." />
        </Main>
      </DocumentTitle>
    );
  }
  // Handle the error state
  return (
    <DocumentTitle title="😥 Sorry">
    <Main>
      <PageTitle title="😥 Sorry" />
      <Banner type="error" text="There seems to have been a problem loading this page..." action='reload' />
    </Main>
  </DocumentTitle>
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loading;
