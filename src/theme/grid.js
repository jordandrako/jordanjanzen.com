import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DocumentTitle from 'react-document-title';

import PageTitle from '../components/PageTitle';

import { mediaMax } from './style-utils';

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
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  ${mediaMax.tablet`
    overflow-y: initial
  `};
`;

export const Row = styled.section`
  margin: ${(props) => (props.full ? '2em  0 2.5em' : '2em 2em 2.5em')};
  ${(props) =>
    props.child
      ? `
  margin: 0 0 2em;`
      : null} max-width: 1000px;
  ${mediaMax.tablet`
    padding: ${(props) => (props.full ? `1.5em 0 2em` : '1.5em 1em 2em')};
    ${(props) => (props.child ? 'padding: 0; margin-bottom: 2em' : null)};
  `};
`;

Row.propTypes = {
  full: PropTypes.bool,
  child: PropTypes.bool,
};

Row.defaultProps = {
  full: false,
  child: false,
};

export const Hero = styled(Row)`
  margin: 0;
`;

export const Page = (props) => (
  <DocumentTitle
    title={
      props.title !== 'Home'
        ? `${props.title} | Jordan Janzen`
        : 'Jordan Janzen'
    }
  >
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
