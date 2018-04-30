import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import { AppContext } from '../App/App';
import AddProjectForm from '../Forms/AddProjectForm';
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
      category: 'all'
    };
  }

  render() {
    return (
      <AppContext.Consumer>
        {(context) => {
          const {
            addProject,
            cloudinary,
            isMobile,
            projects,
            removeProject,
            skills,
            isLoggedIn,
            updateProject
          } = context;

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
                        isLoggedIn={isLoggedIn}
                        updateProject={updateProject}
                      />
                    ))}
                </ListOfProjects>
              </Row>
              {isLoggedIn && skills ? (
                <Row>
                  <AddProjectForm
                    addProject={addProject}
                    cloudinary={cloudinary}
                    skills={skills}
                  />
                </Row>
              ) : null}
              <Route
                exact
                path="/portfolio/:projectId"
                render={(props) => (
                  <ProjectSingle
                    isLoggedIn={isLoggedIn}
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
          ) : (
            undefined
          );
        }}
      </AppContext.Consumer>
    );
  }
}

Portfolio.propTypes = {
  isLoggedIn: PropTypes.bool,
  isMobile: PropTypes.bool.isRequired,
  addProject: PropTypes.func.isRequired,
  updateProject: PropTypes.func.isRequired,
  removeProject: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired,
  skills: PropTypes.object.isRequired,
  cloudinary: PropTypes.shape({
    key: PropTypes.string,
    secret: PropTypes.string
  })
};

Portfolio.defaultProps = {
  isLoggedIn: false,
  cloudinary: {
    key: undefined,
    secrect: undefined
  }
};

export default Portfolio;
