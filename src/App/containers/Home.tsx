import { IHomeProps } from 'App/App.types';
import { adjustHue, transparentize } from 'polished';
import * as React from 'react';
import {
  fonts,
  palette,
  screenSizes,
  semanticColors,
  styled,
} from '../../styling';
import Button, { ButtonType } from '../components/Button';
import CloudImage from '../components/CloudImage';
import { Hero, Row } from '../components/Page';
import Project from '../components/Project/Project';

const OuterHero = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    ${transparentize(1, semanticColors.siteBackground)} 25%,
    ${transparentize(0.4, semanticColors.siteBackground)} 60%,
    ${transparentize(0.1, semanticColors.siteBackground)} 90%,
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
    ${adjustHue(-20, palette.themePrimary)} 0,
    ${palette.themePrimary} 100%
  );
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: ${screenSizes.tablet}) {
    width: 50%;
    padding: 6em 2em;
    background: transparent;

    p {
      font-size: 1.2rem;
    }
  }

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

  @media (min-width: ${screenSizes.tablet}) {
    font-size: 1.75rem;
  }
`;

const Cta = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${screenSizes.tablet}) {
    align-self: flex-start;
  }
`;

const Entice = styled.p`
  font-size: 0.7rem !important;
  opacity: 0.7;
  margin: 0.5em 0 0;
`;

class Home extends React.Component<IHomeProps, {}> {
  public constructor(props: IHomeProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { projects, isMobile } = this.props;

    const projectIndex = projects ? Object.keys(projects).length - 1 : -1;
    const projectKey = projects ? Object.keys(projects)[projectIndex] : null;

    return (
      <>
        <Hero>
          {!isMobile ? (
            <CloudImage
              publicId="jordan_headshot_test"
              format="png"
              name="Jordans Headshot."
              border={false}
              width="1000"
              crop="limit"
              style={{ backgroundPosition: 'left' }}
            >
              {this._heroContent()}
            </CloudImage>
          ) : (
            this._heroContent()
          )}
        </Hero>
        <Row>
          {projectKey && (
            <>
              <h2>My latest project</h2>
              <Project
                projectId={projectKey}
                details={projects[projectKey]!}
                style={{ margin: '0 0 1em', width: '100%' }}
              />
            </>
          )}
          <Button to="/portfolio/" buttonType={ButtonType.Cta}>
            View My Portfolio
          </Button>
        </Row>
      </>
    );
  }

  private _heroContent = (): JSX.Element => (
    <OuterHero>
      <InnerHero>
        {this.props.isMobile ? (
          <CloudImage
            publicId="jordan_headshot_test"
            format="png"
            name="Jordans Headshot."
            width="142"
            height="142"
            crop="fill"
            gravity="face"
            radius="max"
          />
        ) : null}
        <Intro>
          Hey there!
          <br />
          I'm a Front-End Engineer.
        </Intro>
        <p>
          My name is <strong>Jordan Janzen</strong>.<br />I love building
          libraries and web apps that provide a great user experience.
        </p>
        <Cta>
          <Button
            href="https://1drv.ms/w/s!AiOn_Ae2sW-_qfgMiLv3mjWJJboLGw?e=Kas9Ka"
            target="_blank"
            buttonType={ButtonType.Cta}
            icon="file-text"
          >
            Download My Resume
          </Button>
          <Entice>See what I can do for your company!</Entice>
        </Cta>
      </InnerHero>
    </OuterHero>
  );
}

export default Home;
