import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';

import { MainColumn, Main, Row } from '../Grid';
import PageTitle from '../PageTitle';
import Banner from '../Banner';

import CodeLoader from '../../theme/images/codeLoader.svg';

const Loading = ({ isLoading }) => {
  // Handle the loading state
  if (isLoading) {
    return (
      <DocumentTitle title="Loading...">
        <MainColumn>
          <PageTitle title="Loading..." ext={false} />
          <Main>
            <Row><img src={CodeLoader} className="CodeLoader" alt="loading..." /></Row>
          </Main>
        </MainColumn>
      </DocumentTitle>
    );
  }
  // Handle the error state
  return (
    <DocumentTitle title="😥 Sorry">
      <MainColumn>
        <PageTitle title="😥 Sorry" ext={false} />
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
