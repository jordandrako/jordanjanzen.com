import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import styled from 'styled-components';

import PageTitle from '../PageTitle';
import Banner from '../Banner';
import StyledLoader from '../StyledLoader';

import { MainContainer, Main, Row } from '../../styling/grid';

const Load = styled(Main)`
  align-items: center;
  justify-content: center;
`;

const Loading = ({ isLoading }) => {
  // Handle the loading state
  if (isLoading) {
    return (
      <DocumentTitle title="Loading...">
        <MainContainer>
          <PageTitle title="Loading..." ext={false} />
          <Load>
            <StyledLoader />
          </Load>
        </MainContainer>
      </DocumentTitle>
    );
  }
  // Handle the error state
  return (
    <DocumentTitle title="😥 Sorry">
      <MainContainer>
        <PageTitle title="😥 Sorry" ext={false} />
        <Main>
          <Row>
            <Banner type="error" action="reload">
              There seems to have been a problem loading this page...
            </Banner>
          </Row>
        </Main>
      </MainContainer>
    </DocumentTitle>
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loading;
