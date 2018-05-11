import * as moment from 'moment';
import { adjustHue } from 'polished';
import * as React from 'react';
import CloudImage from '../components/CloudImage';
import Project from '../../components/Project';
import { fonts, mediaMin, semanticColors, styled } from '../../styling';
import Button from '../components/Button';
import { Hero, Page, Row } from './grid';

const OuterHero = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 33%,
    ${semanticColors.siteBackground} 100%
  );
  display: flex;
  justify-content: flex-end;
`;

const InnerHero = styled.div`
  padding: 2em;
  width: 100%;
  background: linear-gradient(
    135deg,
    ${adjustHue(-20, semanticColors.primaryColor)} 0,
    ${semanticColors.primaryColor} 100%
  );
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${mediaMin.tablet`
    width: 50%;
    padding: 6em 2em;
    background: transparent;

    p {
      font-size: 1.2rem;
    }
  `};

  img {
    margin: 0 0.5em 0.5em 0;
  }
`;

const Intro = styled.h2`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-family: ${fonts.monospace};
  letter-spacing: 0;
  font-size: 1.25rem;

  ${mediaMin.tablet`
    font-size: 1.75rem;
  `};
`;

const Cta = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaMin.tablet`
    align-self: flex-start;
  `};
`;

const Entice = styled.p`
  font-size: 0.7rem !important;
  opacity: 0.7;
  margin: 0.5em 0 0;
`;

class Home extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render(): JSX.Element {
    const { projects, isMobile } = this.props;

    const HeroContent = (
      <OuterHero>
        <InnerHero>
          {isMobile ? (
            <CloudImage
              publicId="Jordan_Headshot"
              format="jpg"
              name="Jordan's Headshot."
              width="140"
              height="140"
              crop="fill"
              gravity="face"
              radius="max"
            />
          ) : null}
          <Intro>
            Hey there!<br />I'm a Developer<br />&amp; UX Designer.
          </Intro>
          <p>
            My name is <strong>Jordan Janzen</strong>.<br />I'm{' '}
            <strong>{moment('19911109', 'YYYYMMDD').fromNow(true)} old</strong>{' '}
            and living in <strong>Seattle, WA</strong>. I love building sites
            and web apps that look great and function even better.
          </p>
          <Cta>
            <Button
              href="https://res.cloudinary.com/jordan-janzen/image/upload/v1511291826/Jordan_Janzen_CV.pdf"
              target="_blank"
              type="cta"
            >
              <i className="fa fa-file-text" aria-hidden="true" /> Download My
              CV
            </Button>
            <Entice>See what I can do for your company!</Entice>
          </Cta>
        </InnerHero>
      </OuterHero>
    );

    const projectIndex = projects && Object.keys(projects).length - 1;
    const projectKey = projects && Object.keys(projects)[projectIndex];

    return (
      <Page title="Home">
        <Hero>
          {!isMobile ? (
            <CloudImage
              publicId="Jordan_Headshot_fade"
              format="png"
              name="Jordan's Headshot."
              border={false}
              width="1000"
              crop="limit"
              style={{ backgroundPosition: 'left' }}
            >
              {HeroContent}
            </CloudImage>
          ) : (
            HeroContent
          )}
        </Hero>
        <Row>
          <h2>My latest project</h2>
          {projectKey ? (
            <Project
              index={projectKey}
              details={projects[projectKey]}
              style={{ margin: '0 0 1em', width: '100%' }}
            />
          ) : null}
          <Button to="/portfolio/" type="cta">
            View My Portfolio
          </Button>
        </Row>
      </Page>
    );
  }
}

// Home.propTypes = {
//   isMobile: PropTypes.bool.isRequired,
//   projects: PropTypes.object.isRequired,
// };

export default Home;
