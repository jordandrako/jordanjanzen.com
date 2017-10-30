import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    this.showSingle = this.showSingle.bind(this);
    this.closeSingle = this.closeSingle.bind(this);
    this.renderSingle = this.renderSingle.bind(this);

    this.state = {
      category: 'all',
      single: null,
    };
  }

  showSingle(key) {
    this.setState({
      ...this.state,
      single: key,
    });
  }

  closeSingle() {
    this.setState({
      ...this.state,
      single: null,
    });
  }

  renderSingle() {
    const key = this.state.single;
    const { details } = this.props.projects[key];

    return <ProjectSingle details={details} />;
  }

  render() {
    return (
      <Page title="Portfolio">
        <Row>
          <h2>This is my portfolio</h2>
          <ListOfProjects>
            {Object.keys(this.props.projects).map((key) => (
              <Project
                key={key}
                index={key}
                details={this.props.projects[key]}
                uid={this.props.uid}
                updateProject={this.props.updateProject}
                showSingle={this.showSingle}
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
        {this.state.single ? this.renderSingle : null}
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
