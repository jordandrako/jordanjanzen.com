import * as React from "react";
import DocumentTitle from "react-document-title";
import PageTitle from "../components/PageTitle";
import { IFlex, IPageProps, IRow } from "./grid.types";
import { mediaMax } from "./style-utils";
import styled from "./styled-components";
import { semanticColors } from "./theme";

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
  margin: ${(props: IRow) => (props.full ? "0  0 2.5em" : "0 2em 2.5em")};

  &:first-child {
    margin-top: 2em;
  }

  ${(props: IRow) => {
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
    return null;
  }};

  ${mediaMax.tablet`
    margin: ${(props: IRow) => {
      if (props.full || props.child) {
        return "0 0 2em";
      }
      return "0 1em 2em";
    }};

    &:first-child {
      margin-top: ${(props: IRow) => (props.child ? "0" : "1.5em")};
    }

    &:last-child {
      margin-bottom: ${(props: IRow) => (props.child ? "0" : "2em")};
    }
  `};
`;

export const Hero = styled(Row)`
  margin: 0 0 2.5em;
  margin-top: 0 !important;
  max-width: calc(1000px + 4em);

  ${mediaMax.tablet`
    margin: 0 0 1.5em;
  `};
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props: IFlex) => (props.column ? "column" : "row")};
  flex-wrap: ${(props: IFlex) => (props.wrap ? "wrap" : "nowrap")};
  align-items: ${(props: IFlex) => (props.align ? props.align : undefined)};
  justify-content: ${(props: IFlex) =>
    props.justify ? props.justify : undefined};
`;

export const Page = (props: IPageProps) => {
  const docTitle =
    props.title === "Home" ? "Jordan Janzen" : `${props.title} | Jordan Janzen`;

  return (
    <DocumentTitle title={docTitle}>
      <MainContainer>
        <PageTitle title={props.title} ext={props.ext} />
        <Main>{props.children}</Main>
      </MainContainer>
    </DocumentTitle>
  );
};
