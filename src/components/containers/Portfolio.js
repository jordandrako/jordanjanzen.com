import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import { Link, Route } from 'react-router-dom';

import { MainContainer, Main, Row } from '../Grid';
import PageTitle from '../PageTitle';
import AddProjectForm from '../AddProjectForm';

const Portfolio = (props) => (
  <DocumentTitle title="Jordan Janzen | Portfolio">
    <MainContainer>
      <PageTitle title="Portfolio" />
      <Main>
        {props.uid ? (
          <Row>
            <AddProjectForm addProject={props.addProject} />
          </Row>
        ) : null}
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

Portfolio.propTypes = {
  uid: PropTypes.string,
  addProject: PropTypes.func.isRequired,
};

Portfolio.defaultProps = {
  uid: null,
};

export default Portfolio;
