import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DocumentTitle from 'react-document-title';

import PageTitle from '../components/PageTitle';

import { mediaMax } from './style-utils';
import { semanticColors } from './variables';

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

  a {
    line-height: 0.9em;
    display: inline-block;
    text-shadow:
      2px 2px ${semanticColors.siteBackground},
      2px -2px ${semanticColors.siteBackground},
      -2px 2px ${semanticColors.siteBackground},
      -2px -2px ${semanticColors.siteBackground};
    }
  }
`;

export const Row = styled.section`
  max-width: 1000px;
  margin: ${(props) => (props.full ? '0  0 2.5em' : '0 2em 2.5em')};

  &:first-child {
    margin-top: 2em;
  }

  ${(props) => {
    if (props.child) {
      return `
        margin: 0 0 2em;

        &:first-child {
          margin-top: 0;
        }

        &:last-child {
          margin-bottom: 0;
        }
      `;
    }
  }};

  ${mediaMax.tablet`
    margin: ${(props) => {
      if (props.full || props.child) {
        return '0 0 2em';
      }
      return '0 1em 2em';
    }};

    &:first-child {
      margin-top: ${(props) => (props.child ? '0' : '1.5em')};
    }

    &:last-child {
      margin-bottom: ${(props) => (props.child ? '0' : '2em')};
    }
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

export const Hero = styled(Row) `
  margin: 0 0 2.5em;
  margin-top: 0 !important;
  max-width: calc(1000px + 4em);

  ${mediaMax.tablet`
    margin: 0 0 1.5em;
  `};
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'nowrap')};
  align-items: ${(props) => (props.align ? props.align : undefined)};
  justify-content: ${(props) => (props.justify ? props.justify : undefined)};
`;

Flex.propTypes = {
  column: PropTypes.string,
  wrap: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
};

Flex.defaultProps = {
  column: undefined,
  wrap: undefined,
  align: undefined,
  justify: undefined,
};

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
