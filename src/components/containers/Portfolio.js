import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link, Route } from 'react-router-dom';

import { MainContainer, Main, Row } from '../Grid';
import PageTitle from '../PageTitle';

const Portfolio = () => (
  <DocumentTitle title="Jordan Janzen | Portfolio">
    <MainContainer>
      <PageTitle title="Portfolio" />
      <Main>
        <Row>
          <ul>
            <li>
              <Link to="/portfolio/a">Project</Link>
            </li>
            <li>
              <Link to="/portfolio/b">Project</Link>
            </li>
            <li>
              <Link to="/portfolio/c">Project</Link>
            </li>
            <li>
              <Link to="/portfolio/d">Project</Link>
            </li>
            <li>
              <Link to="/portfolio/e">Project</Link>
            </li>
            <li>
              <Link to="/portfolio/f">Project</Link>
            </li>
          </ul>
        </Row>
        <Row>
          <Route
            match="portfolio/:projectId"
            render={(state) => (
              <p>This is Project {state.match.params.projectId}</p>
            )}
          />
        </Row>
      </Main>
    </MainContainer>
  </DocumentTitle>
);

export default Portfolio;
