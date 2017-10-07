import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import styled from 'styled-components';

import { MainColumn, Main, Row } from '../Grid';
import PageTitle from '../PageTitle';
import Banner from '../Banner';

import CodeLoader from '../../theme/images/codeLoader.svg';

const Load = styled(Main) `
  align-items: center;
  justify-content: center;
`;

const Loading = ({ isLoading }) => {
  // Handle the loading state
  if (isLoading) {
    return (
      <DocumentTitle title="Loading...">
        <MainColumn>
          <PageTitle title="Loading..." ext={false} />
          <Load>
            <img src={CodeLoader} className="CodeLoader" alt="loading..." />
          </Load>
        </MainColumn>
      </DocumentTitle>
    );
  }
  // Handle the error state
  return (
    <DocumentTitle title="😥 Sorry">
      <MainColumn>
        <PageTitle title="😥 Sorry" ext={false} />
        <Row>
          <Banner type="error" action="reload">There seems to have been a problem loading this page...</Banner>
        </Row>
      </MainColumn>
    </DocumentTitle>
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loading;
