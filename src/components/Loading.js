import React from 'react';
import PropTypes from 'prop-types';

import PageTitle from './PageTitle';

const Loading = ({ isLoading }) => {
  // Handle the loading state
  if (isLoading) {
    return <PageTitle>Loading...</PageTitle>;
  }
  // Handle the error state
  return <div>Sorry, there was a problem loading the page.</div>;
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loading;
