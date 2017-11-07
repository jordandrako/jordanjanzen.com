import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import CloudImage from './CloudImage';
import Button from './Button';

import { toTitleCase } from '../helpers';
import { typography, colors } from '../theme/variables';
import { mediaMax } from '../theme/style-utils';

const Item = styled.li`
  width: calc(50% - 1em);
  ${mediaMax.tablet`
    width: 100%;
  `} min-width: 280px;
  border: 5px double ${colors.black};
  padding: 1em;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 0.5em 1em;
  flex-grow: 1;
`;

const Thumbnail = styled.section`
  margin-bottom: 1em;
  > .cloud-image {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4em 2em;
  }
`;

const ProjectTitle = styled.h2`
  font-family: ${typography.monospace};
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 0;
  background: ${colors.lightblue};
  padding: 0.33em 0.5em;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.33);
`;

const Description = styled.p`
  margin-bottom: auto;
`;

const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-between;
`;

const Subheading = styled.h4`
  margin-bottom: 0.15em;
`;

const Client = styled.div`
  font-size: 0.8rem;
`;

const Skills = styled.div`
  font-size: 0.8rem;
  text-align: right;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 0.75rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    li {
      display: inline-block;
      background: ${colors.lightblack};
      color: ${colors.lightwhite};
      padding: 0.15em 0.5em;
      margin: 0 0 3px 3px;
    }
  }
`;

const Buttons = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 0;
    margin: 0.5em 0.5em 0 0;

    a {
      border-bottom: 0;
    }
  }
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
        <Item key={index}>
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
          <Description>{details.short_desc}</Description>
          <Details>
            <Client>
              <Subheading>Client:</Subheading>
              <p>
                {toTitleCase(clientName)}
                <br />
                {clientIndustry ? (
                  <em>Industry: {toTitleCase(clientIndustry)}</em>
                ) : null}
              </p>
            </Client>
            <Skills>
              <Subheading>Category: {toTitleCase(details.category)}</Subheading>
              <ul>
                {details.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </Skills>
          </Details>
          <Buttons>
            <li>
              <Link to={`/portfolio/${index}`}>
                <Button small type="primary">
                  <i className="fa fa-search" aria-hidden="true" /> More Details
                </Button>
              </Link>
            </li>
            {details.link !== '' ? (
              <li>
                <a
                  href={details.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button small type="secondary">
                    <i
                      className="fa fa-external-link"
                      aria-hidden="true"
                    />{' '}
                    Visit Site
                  </Button>
                </a>
              </li>
            ) : null}
            {details.repo !== '' ? (
              <li>
                <a
                  href={details.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button small type="secondary">
                    <i className="fa fa-github" aria-hidden="true" /> View Repo
                  </Button>
                </a>
              </li>
            ) : null}
          </Buttons>
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
};

export default Project;
