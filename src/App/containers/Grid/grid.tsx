import * as React from 'react';
import DocumentTitle from 'react-document-title';
import { screenSizes, semanticColors, styled } from '../../../styling';
import PageTitle from '../PageTitle';
import { IFlex, IPageProps, IRow } from './grid.types';

export const MainContainer = styled.main`
  flex: 4;
  height: 100%;
  display: flex;
  flex-direction: column;

  overflow-y: hidden;

  @media (max-width: ${screenSizes.tablet}) {
    overflow-y: auto;
  }
`;

export const Main = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: ${screenSizes.tablet}) {
    overflow-y: initial;
  }

  a {
    line-height: 0.9em;
    display: inline-block;
    text-shadow: 2px 2px ${semanticColors.siteBackground},
      2px -2px ${semanticColors.siteBackground},
      -2px 2px ${semanticColors.siteBackground},
      -2px -2px ${semanticColors.siteBackground};
  }
`;

export const Row = styled.section`
  max-width: 1000px;
  margin: ${(props: IRow) =>
    props.full ? '0  0 2.5em' : props.isChild ? '0 0 2em' : '0 2em 2.5em'};

  &:first-child {
    margin-top: ${(props: IRow) => (props.isChild ? '0' : '2em')};
  }

  &:last-child {
    margin-bottom: ${(props: IRow) => (props.isChild ? '0' : '2em')};
  }

  @media (max-width: ${screenSizes.tablet}) {
    margin: ${(props: IRow) => {
      if (props.full || props.isChild) {
        return '0 0 2em';
      }
      return '0 1em 2em';
    }};
  }
`;

export const Hero = styled(Row)`
  margin: 0 0 2.5em;
  margin-top: 0 !important;
  max-width: calc(1000px + 4em);

  @media (max-width: ${screenSizes.tablet}) {
    margin: 0 0 1.5em;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props: IFlex) => (props.column ? 'column' : 'row')};
  flex-wrap: ${(props: IFlex) => (props.wrap ? 'wrap' : 'nowrap')};
  align-items: ${(props: IFlex) => (props.align ? props.align : 'unset')};
  justify-content: ${(props: IFlex) =>
    props.justify ? props.justify : 'unset'};
`;

export const Page = (props: IPageProps) => {
  const docTitle =
    props.title === 'Home' ? 'Jordan Janzen' : `${props.title} | Jordan Janzen`;

  return (
    <DocumentTitle title={docTitle}>
      <MainContainer>
        <PageTitle title={props.title} ext={props.ext} />
        <Main>{props.children}</Main>
      </MainContainer>
    </DocumentTitle>
  );
};
