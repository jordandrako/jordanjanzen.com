import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import AddProjectForm from '../AddProjectForm';
import Project from '../Project';
import ProjectSingle from '../ProjectSingle';

import { Page, Row } from '../../theme/grid';

const ListOfProjects = styled.ul`
  list-style-type: none;
  margin: 0 -0.5em;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: 'all',
    };
  }

  render() {
    const {
      addProject,
      isMobile,
      projects,
      removeProject,
      skills,
      uid,
      updateProject,
    } = this.props;

    return projects ? (
      <Page title="Portfolio">
        <Row>
          <ListOfProjects>
            {Object.keys(projects)
              .reverse()
              .map((key) => (
                <Project
                  key={key}
                  index={key}
                  details={projects[key]}
                  uid={uid}
                  updateProject={updateProject}
                />
              ))}
          </ListOfProjects>
        </Row>
        {(uid && skills) ? (
          <Row>
            <AddProjectForm
              addProject={addProject}
              skills={skills}
            />
          </Row>
        ) : null}
        <Route
          exact
          path="/portfolio/:projectId"
          render={(props) => (
            <ProjectSingle
              uid={uid}
              isMobile={isMobile}
              projects={projects}
              index={props.match.params.projectId}
              details={projects[props.match.params.projectId]}
              updateProject={updateProject}
              removeProject={removeProject}
              {...props}
            />
          )}
        />
      </Page>
    ) : undefined;
  }
}

Portfolio.propTypes = {
  uid: PropTypes.string,
  isMobile: PropTypes.bool.isRequired,
  addProject: PropTypes.func.isRequired,
  updateProject: PropTypes.func.isRequired,
  removeProject: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired,
  skills: PropTypes.object.isRequired,
};

Portfolio.defaultProps = {
  uid: null,
};

export default Portfolio;
