import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import CloudImage from './CloudImage';
import Button from './Button';

import { Row } from '../theme/grid';
import { palette, semanticColors, fonts } from '../theme/theme';
import { mediaMax } from '../theme/style-utils';

const ClickOutside = styled(Link)`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  width: 100%;
  z-index: 999;
  border-bottom: 0;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  pointer-events: none;
`;

const Single = styled.div`
  width: 84vw;
  max-width: 760px;
  height: 84vh;
  margin: 30px;
  background: ${semanticColors.siteBackground};
  box-shadow: 0 -3px 0 ${semanticColors.primaryColor}, 0 0 9px #000;
  z-index: 1000;
  pointer-events: all;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    margin-bottom: 1em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${mediaMax.tablet`
    width: 90vw;
    max-width: 420px;
    height: 90vh;
  `};
`;

const Frame = styled.div`
  width: 100%;
  padding: 0.5em;
  background: ${palette.black};
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  z-index: 2;

  &:first-child {
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.3);
  }

  &:last-child {
    box-shadow: 0 -1px 3px 1px rgba(0, 0, 0, 0.3);
    margin-top: auto;
  }

  a {
    border-bottom: none;
  }
`;

const Title = styled.h2`
  font-family: ${fonts.monospace};
  color: ${palette.lightwhite};
  font-size: 1.15rem;
  margin: 0;
  line-height: 1;
`;

const Content = styled(Row)`
  overflow-y: scroll;
  margin: 0;
  padding: 1em;
  flex-grow: 1;
  max-width: none;
`;

class ProjectSingle extends Component {
  // eslint-disable-next-line react/sort-comp
  constructor(props) {
    super(props);
    this.state = {
      delete: undefined
    };

    this.removeProject = this.removeProject.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.index !== prevState.delete) {
      return { delete: undefined };
    }
  }

  removeProject(key) {
    const state = { ...this.state };
    this.setState({ ...state, delete: undefined });
    this.props.removeProject(key);
    return this.props.history.push('/portfolio');
  }

  handleDelete(index) {
    if (this.state.delete === undefined) {
      return this.setState({ delete: index });
    }
    return this.removeProject(index);
  }

  render() {
    const { projects, details, index, isMobile } = this.props;

    const total = Object.keys(projects).length - 1;

    const current = Object.keys(projects).indexOf(index);

    const nextIndex = current === total ? 0 : current + 1;

    const prevIndex = current === 0 ? total : current - 1;

    const prevId = Object.keys(projects)[nextIndex];

    const nextId = Object.keys(projects)[prevIndex];

    if (details && index) {
      return (
        <div key={index}>
          <ClickOutside to="/portfolio/" />
          <Container>
            <Single>
              <Frame>
                <Title>{details.name || 'Name'}</Title>
                <Button to="/portfolio" type="delete" style={{ margin: 0 }} />
              </Frame>
              <Content>
                <p>{details.long_desc}</p>
                {Object.keys(details.images).map((image, imageIndex) => (
                  <CloudImage
                    key={details.images[image].id}
                    name={`Feature ${imageIndex} ${details.images[image].id}`}
                    publicId={details.images[image].id}
                    format={details.images[image].format}
                    width={isMobile ? '400' : '800'}
                    crop="limit"
                    link
                  />
                ))}
              </Content>
              <Frame>
                <Button to={`/portfolio/${prevId}`} small type="secondary">
                  <i className="fa fa-arrow-left" aria-hidden="true" />
                  {this.props.isMobile ? '' : ' prev'}
                </Button>
                {details.link !== '' ? (
                  <Button
                    href={details.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    small
                    type="secondary"
                  >
                    {this.props.isMobile ? (
                      ''
                    ) : (
                      <i className="fa fa-external-link" aria-hidden="true" />
                    )}{' '}
                    Visit Site
                  </Button>
                ) : null}
                {details.repo !== '' ? (
                  <Button
                    href={details.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    small
                    type="secondary"
                  >
                    <i className="fa fa-github" aria-hidden="true" /> View Repo
                  </Button>
                ) : null}
                {this.props.uid ? (
                  <Button
                    small
                    type="secondary"
                    bg={palette.red}
                    onClick={() => this.handleDelete(index)}
                  >
                    {this.state.delete ? 'Confirm?' : 'Delete'}
                  </Button>
                ) : null}
                <Button to={`/portfolio/${nextId}`} small type="secondary">
                  {this.props.isMobile ? '' : 'next '}
                  <i className="fa right fa-arrow-right" aria-hidden="true" />
                </Button>
              </Frame>
            </Single>
          </Container>
        </div>
      );
    }
    return null;
  }
}

ProjectSingle.propTypes = {
  uid: PropTypes.string,
  index: PropTypes.string.isRequired,
  details: PropTypes.object.isRequired,
  projects: PropTypes.object.isRequired,
  isMobile: PropTypes.bool.isRequired,
  removeProject: PropTypes.func.isRequired,
  history: PropTypes.object
};

ProjectSingle.defaultProps = {
  uid: null,
  history: undefined
};

export default ProjectSingle;
