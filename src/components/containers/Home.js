import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { adjustHue } from 'polished';

import CloudImage from '../CloudImage';

import { Page, Row, Hero } from '../../theme/grid';
import { colors, theme, typography } from '../../theme/variables';
import { mediaMin } from '../../theme/style-utils';

const OuterHero = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

const InnerHero = styled.div`
  padding: 0.75em;
  width: 100%;
  background: linear-gradient(135deg, ${theme.primaryColor} 0%, ${adjustHue(
  -20,
  theme.primaryColor,
)} 100%);
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${mediaMin.tablet`
    font-size: 1.3rem;
    width: 50%;
    padding: 6em 2em;
    background: transparent;
  `}
  }

  img {
    margin: 0 0.5em 0.5em 0;
  }
`;

const Intro = styled.h2`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-family: ${typography.monospace};
  letter-spacing: 0;
  font-size: 1.1rem;
`;

class Home extends Component {
  render() {
    const HeroContent = (
      <OuterHero>
        <InnerHero>
          {this.props.isMobile ? (
            <CloudImage
              publicId="Jordan_Headshot_fade"
              format="png"
              name="Jordan's Headshot."
              width="90"
              height="90"
              crop="fill"
              gravity="face"
              radius="max"
              bo={`2px_solid_rgb:${colors.black.replace('#', '')}`}
              border={false}
            />
          ) : null}
          <Intro>
            Hi! I'm a Developer<br />& UX Designer.
          </Intro>
          <p>
            I like to build sites and web apps that look great and function even
            better.
          </p>
        </InnerHero>
      </OuterHero>
    );

    return (
      <Page title="Home">
        <Hero>
          {!this.props.isMobile ? (
            <CloudImage
              publicId="Jordan_Headshot_fade"
              format="png"
              name="Jordan's Headshot."
              border={false}
              width="1000"
              crop="limit"
            >
              {HeroContent}
            </CloudImage>
          ) : (
            HeroContent
          )}
        </Hero>
        <Row />
      </Page>
    );
  }
}

Home.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Home;
