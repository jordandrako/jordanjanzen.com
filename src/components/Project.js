import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { toTitleCase } from '../helpers';
import { typography, colors } from '../theme/variables';

const Item = styled.li`
  background: PapayaWhip;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  flex-grow: 1;
`;

const Thumbnail = styled.div`
  width: 100%;
  padding: 2em 1em;
  background: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background: url(${(props) => props.src}) no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.25;
  }

  * {
    z-index: 1;
    position: relative;
  }
`;

const ProjectTitle = styled.h3`
  color: ${colors.lightwhite};
  font-family: ${typography.monospace};
  font-size: 1.5em;
  text-transform: uppercase;
  margin: 0;
`;

const Client = styled.div`
  font-size: 0.8em;
`;

class Project extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.showSingle = this.showSingle.bind(this);
  }

  handleChange(e, key) {
    const updatedProp = {
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    };
    this.props.updateProject(key, updatedProp);
  }

  // TODO: Show ProjectSingle component handler
  showSingle(key) {
    alert(`Showing ${key}`);
  }

  render() {
    const { details, index } = this.props;
    const { name: clientName, industry: clientIndustry } = details.client;

    return (
      <Item key={index} onClick={() => this.showSingle(index)}>
        <Thumbnail src={details.image}>
          <ProjectTitle>{details.name}</ProjectTitle>
        </Thumbnail>
        <Client>
          <p>
            For: {toTitleCase(clientName)}
            <br />
            Industry: {toTitleCase(clientIndustry)}
            <br />
          </p>
        </Client>
        <p>{details.short_desc}</p>
      </Item>
    );
  }
}

Project.propTypes = {
  updateProject: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
};

export default Project;
