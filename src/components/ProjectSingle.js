import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import CloudImage from './CloudImage';
import Button from './Button';

import { Row } from '../theme/grid';
import { colors, theme, typography } from '../theme/variables';
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
  background: ${theme.siteBackground};
  box-shadow: 0 -3px 0 ${theme.primaryColor}, 0 0 9px #000;
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
    width: 95vw;
    max-width: 420px;
    height: 95vh;
  `};
`;

const Frame = styled.div`
  width: 100%;
  padding: 0.5em;
  background: ${colors.black};
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
  font-family: ${typography.monospace};
  color: ${colors.lightwhite};
  font-size: 1.15rem;
  margin: 0;
  line-height: 1;
`;

const Close = styled(Link)`
  border-bottom: 0;
  margin: 0;
  padding: 0;

  button {
    margin: 0;
    padding: 0;
  }
`;

const ButtonLink = styled(Link)`
  border-bottom: none;
`;

const Content = styled(Row)`
  overflow-y: scroll;
  margin: 0;
  padding: 1em;
  flex-grow: 1;
  max-width: none;
`;

class ProjectSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delete: false,
    };

    this.removeProject = this.removeProject.bind(this);
  }

  removeProject(key) {
    const state = { ...this.state };
    this.setState({ ...state, delete: false });
    this.props.removeProject(key);
  }

  render() {
    const { projects, details, index, isMobile } = this.props;

    const total = Object.keys(projects).length - 1;

    const current = Object.keys(projects).indexOf(index);

    const nextIndex = current === total ? 0 : current + 1;

    const prevIndex = current === 0 ? total : current - 1;

    const nextId = Object.keys(projects)[nextIndex];

    const prevId = Object.keys(projects)[prevIndex];

    if (details && index) {
      return (
        <div key={index}>
          <ClickOutside to="/portfolio/" />
          <Container>
            <Single>
              <Frame>
                <Title>{details.name || 'Name'}</Title>
                <Close to="/portfolio">
                  <Button type="delete" />
                </Close>
              </Frame>
              <Content>
                <p>{details.long_desc}</p>
                {Object.keys(details.images).map((image) => (
                  <CloudImage
                    publicId={details.images[image].id}
                    format={details.images[image].format}
                    width={isMobile ? '400' : '800'}
                    crop="limit"
                    link
                  />
                ))}
              </Content>
              <Frame>
                <ButtonLink to={`/portfolio/${prevId}`}>
                  <Button small type="secondary">
                    <i className="fa fa-arrow-left" aria-hidden="true" /> prev
                  </Button>
                </ButtonLink>
                {details.link !== '' ? (
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
                ) : null}
                {details.repo !== '' ? (
                  <a
                    href={details.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button small type="secondary">
                      <i className="fa fa-github" aria-hidden="true" /> View
                      Repo
                    </Button>
                  </a>
                ) : null}
                {this.props.uid ? (
                  <Button
                    small
                    type="secondary"
                    bg={colors.red}
                    onClick={() => {
                      !this.state.delete
                        ? this.setState({ delete: true })
                        : this.removeProject(index);
                    }}
                  >
                    {this.state.delete ? 'Confirm?' : 'Delete'}
                  </Button>
                ) : null}
                <ButtonLink to={`/portfolio/${nextId}`}>
                  <Button small type="secondary">
                    next{' '}
                    <i className="fa right fa-arrow-right" aria-hidden="true" />
                  </Button>
                </ButtonLink>
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
};

ProjectSingle.defaultProps = {
  uid: null,
};

export default ProjectSingle;
