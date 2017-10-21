import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AddProjectForm from '../AddProjectForm';
import Project from '../Project';

import { Page, Row } from '../../theme/grid';
// import { colors } from '../../theme/variables';

const ListOfProjects = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const Portfolio = (props) => (
  <Page title="Portfolio">
    <Row>
      <h2>This is my portfolio</h2>
      <ListOfProjects>
        {Object.keys(props.projects).map((key) => (
          <Project
            key={key}
            index={key}
            details={props.projects[key]}
            uid={props.uid}
            updateProject={props.updateProject}
          />
        ))}
      </ListOfProjects>
    </Row>
    {props.uid ? (
      <Row>
        <AddProjectForm addProject={props.addProject} skills={props.skills} />
      </Row>
    ) : null}
  </Page>
);

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
