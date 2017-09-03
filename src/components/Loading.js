import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ isLoading }) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  return <div>Sorry, there was a problem loading the page.</div>;
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loading;
