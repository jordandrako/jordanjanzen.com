import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

import CloudImage from './CloudImage';

import { toTitleCase } from '../helpers';
import { typography, colors, theme } from '../theme/variables';

const Item = styled.li`
  background: PapayaWhip;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 0.5em 1em;
  flex-grow: 1;
`;

const Thumbnail = styled.section`
  > .cloud-image {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2em;
  }
`;

const ProjectTitle = styled.h3`
  color: ${colors.lightwhite};
  font-family: ${typography.monospace};
  font-size: 1.5em;
  text-transform: uppercase;
  margin: 0;
  text-shadow: 1px 1px 1.5em ${darken(0.6, theme.primaryColor)},
    -1px -1px 1.5em ${darken(0.6, theme.primaryColor)},
    1px -1px 1.5em ${darken(0.6, theme.primaryColor)},
    -1px 1px 1.5em ${darken(0.6, theme.primaryColor)};
`;

const Client = styled.div`
  font-size: 0.8em;
`;

class Project extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    const updatedProp = {
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    };
    this.props.updateProject(key, updatedProp);
  }

  render() {
    const { details, index } = this.props;
    if (details.images) {
      const firstImage = Object.keys(details.images)[0];
      const {
        id: imageId,
        format: imageFormat,
        name: imageName,
      } = details.images[firstImage];

      const { name: clientName, industry: clientIndustry } = details.client;

      return (
        <Item key={index} onClick={() => this.props.showSingle(index)}>
          <Thumbnail>
            <CloudImage
              bg
              publicId={imageId}
              format={imageFormat}
              name={imageName}
              crop="limit"
              width="400"
              background="rgb:000"
              dim
            >
              <ProjectTitle>{details.name}</ProjectTitle>
            </CloudImage>
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
    return null;
  }
}

Project.propTypes = {
  updateProject: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
  showSingle: PropTypes.func.isRequired,
};

export default Project;
