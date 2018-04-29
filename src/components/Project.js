import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { adjustHue } from 'polished';

import CloudImage from './CloudImage';
import Button from './Button';
// import Observer from './Observer';

import { toTitleCase } from '../helpers';
import { colors, theme, typography } from '../theme/variables';
import { mediaMax } from '../theme/style-utils';

const imageHeight = '250';

const Item = styled.li`
  width: calc(50% - 1em);
  ${mediaMax.tablet`
    width: 100%;
  `};
  min-width: 300px;
  border: 5px double ${colors.black};
  padding: 1em;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 0.5em 1em;
  flex-grow: 1;
`;

const ThumbnailLink = styled(Link)`
  line-height: unset !important;
  text-shadow: none !important;
  color: unset !important;
  border: none !important;
`;

// const ThumbnailArea = styled.div`
//   height: ${imageHeight}px;
// `;

const Thumbnail = styled.section`
  margin-bottom: 0;
  height: ${imageHeight}px;
  > .cloud-image {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4em 2em;
    border-width: 5px;
  }
`;

const ProjectTitle = styled.h2`
  font-family: ${typography.monospace};
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  background: ${colors.lightblue};
  background: linear-gradient(
    135deg,
    ${adjustHue(-20, theme.primaryColor)} 0,
    ${theme.primaryColor} 100%
  );
  padding: 0.33em 0.5em;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.33);
`;

const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-between;
  padding: 1em;
  margin-bottom: 1em;
  background: ${colors.black};
  color: ${colors.lightwhite};
`;

const Description = styled.p`
  margin-top: auto;
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
  max-width: 50%;

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
        e.target.type === 'checkbox' ? e.target.checked : e.target.value
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
        name: imageName
      } = details.images[firstImage];

      const { name: clientName, industry: clientIndustry } = details.client;
      return (
        <Item key={index} {...this.props}>
          <ThumbnailLink to={`/portfolio/${index}`}>
            {/* <ThumbnailArea>
              <Observer>
                {(isVisible, hasBeenVisible) =>
                  hasBeenVisible ? ( */}
            <Thumbnail>
              <CloudImage
                bg
                publicId={imageId}
                format={imageFormat}
                name={imageName}
                width="600"
                height={imageHeight}
                crop="fill"
                gravity="north"
                background="rgb:000"
                effects="e_blur:80"
                dim
              >
                <ProjectTitle>{details.name}</ProjectTitle>
              </CloudImage>
            </Thumbnail>
            {/* ) : null}
              </Observer>
            </ThumbnailArea> */}
          </ThumbnailLink>
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
          <Description>{details.short_desc}</Description>
          <Buttons>
            <li>
              <Button to={`/portfolio/${index}`} small type="primary">
                <i className="fa fa-search" aria-hidden="true" /> More Details
              </Button>
            </li>
            {details.link !== '' ? (
              <li>
                <Button
                  href={details.link}
                  target="_blank"
                  small
                  type="secondary"
                >
                  <i className="fa fa-external-link" aria-hidden="true" /> Visit
                  Site
                </Button>
              </li>
            ) : null}
            {details.repo !== '' ? (
              <li>
                <Button
                  href={details.repo}
                  target="_blank"
                  small
                  type="secondary"
                >
                  <i className="fa fa-github" aria-hidden="true" /> View Repo
                </Button>
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
  details: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
  hasBeenVisible: PropTypes.bool,
  updateProject: PropTypes.func
};

Project.defaultProps = {
  hasBeenVisible: false,
  updateProject: undefined
};

export default Project;
