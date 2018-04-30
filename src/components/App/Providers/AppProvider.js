import React from 'react';
import { PropTypes } from 'prop-types';

import ActionsProvider from './ActionsProvider';
import DataProvider from './DataProvider';
import SecretsProvider from './SecretsProvider';

function AppProvider({ children }) {
  return (
    <DataProvider>
      <ActionsProvider>
        <SecretsProvider>{children}</SecretsProvider>
      </ActionsProvider>
    </DataProvider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default AppProvider;
