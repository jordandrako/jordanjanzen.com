import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DocumentTitle from 'react-document-title';

import PageTitle from './PageTitle';

import { mediaMax } from '../theme/style-utils';

export const MainContainer = styled.main`
  flex: 4;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  ${mediaMax.tablet`
    overflow-y: auto;
  `};
`;

export const Main = styled.div`
  padding: 2em;
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  ${mediaMax.tablet`
    overflow-y: initial
    padding: 1.5em 1em;
  `};
`;

export const Row = styled.section`
  max-width: 1000px;
  margin-bottom: 2.5em;
`;

export const Page = (props) => (
  <DocumentTitle title={`Jordan Janzen | ${props.title}`}>
    <MainContainer>
      <PageTitle title={props.title} ext={props.ext} />
      <Main>{props.children}</Main>
    </MainContainer>
  </DocumentTitle>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  ext: PropTypes.bool,
};

Page.defaultProps = {
  ext: true,
};
