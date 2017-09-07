import React from 'react';
import PropTypes from 'prop-types';

import PageTitle from './PageTitle';

import Pacman from '../theme/images/Pacman.svg';

const Loading = ({ isLoading }) => {
  // Handle the loading state
  if (isLoading) {
    return (
      <main>
        <PageTitle>Loading...</PageTitle>
        <img src={Pacman} className="pacman" alt="loading..." />
      </main>
    );
  }
  // Handle the error state
  return <div>Sorry, there was a problem loading the page.</div>;
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loading;
