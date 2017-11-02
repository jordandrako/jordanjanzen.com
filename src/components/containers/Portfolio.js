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
    return (
      <Page title="Portfolio">
        <Row>
          <ListOfProjects>
            {Object.keys(this.props.projects).reverse().map((key) => (
              <Project
                key={key}
                index={key}
                details={this.props.projects[key]}
                uid={this.props.uid}
                updateProject={this.props.updateProject}
              />
            ))}
          </ListOfProjects>
        </Row>
        {this.props.uid ? (
          <Row>
            <AddProjectForm
              addProject={this.props.addProject}
              skills={this.props.skills}
            />
          </Row>
        ) : null}
        <Route
          exact
          path="/portfolio/:projectId"
          render={(props) => (
            <ProjectSingle
              uid={this.props.uid}
              details={this.props.projects[props.match.params.projectId]}
              projects={this.props.projects}
              index={props.match.params.projectId}
              updateProject={this.props.updateProject}
            />)}
        />
      </Page>
    );
  }
}

Portfolio.propTypes = {
  uid: PropTypes.string,
  addProject: PropTypes.func.isRequired,
  updateProject: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired,
  skills: PropTypes.object.isRequired,
};

Portfolio.defaultProps = {
  uid: null,
};

export default Portfolio;
