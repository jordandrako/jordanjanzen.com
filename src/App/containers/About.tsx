import { IAboutProps, TAddSkill } from 'App/App.types';
import * as React from 'react';
import { isLoggedIn } from '../../base';
import { fonts, palette, screenSizes, styled } from '../../styling';
import { yearsSinceBirthday } from '../../utilities';
import Button, { ButtonType } from '../components/Button';
import CloudImage from '../components/CloudImage';
import AddSkillForm from '../components/Forms/AddSkillForm/AddSkillForm';
import { Flex, Row } from '../components/Page';

const SkillsRow = styled(Row)`
  display: flex;
  flex-wrap: wrap;
`;

const SkillsColumn = styled.ul`
  flex: 1;
  padding: 0;
  margin: 0 0 1em;
  list-style: none;
  min-width: 200px;

  h3,
  li {
    text-align: center;
  }

  h3 {
    color: ${palette.blue};
    padding: 0.5em 0;
    margin: 0 0 0.75em 0;
    border-bottom: 2px solid ${palette.blue};
  }

  li {
    font-family: ${fonts.monospace};
    line-height: 1.5;
    padding: 0 1em;
    margin: 1em 0;
    font-size: 0.85rem;

    @media (min-width: ${screenSizes.phone}) {
      font-size: 0.75rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const DateColumn = styled.div`
  flex: 1;
  padding: 1em;
  border-top: 2px solid ${palette.blue};
  border-right: 2px solid ${palette.blue};
`;

const HistoryRow = Flex;

const HistoryColumn = styled.div`
  flex: 4;
  padding: 1em;
  border-top: 2px solid ${palette.blue};
`;

class About extends React.Component<IAboutProps, {}> {
  public render(): JSX.Element {
    const { skills, addSkill } = this.props;

    return (
      <>
        <Row>
          <h2>About, Skills and Interests</h2>
          <SkillsRow isChild={true}>
            <SkillsColumn>
              <h3>Core</h3>
              {skills && this._renderList('core')}
            </SkillsColumn>
            <SkillsColumn>
              <h3>Libraries</h3>
              {skills && this._renderList('library')}
            </SkillsColumn>
            <SkillsColumn>
              <h3>Design</h3>
              {skills && this._renderList('design')}
            </SkillsColumn>
          </SkillsRow>
          {isLoggedIn() ? (
            <Row isChild={true}>
              <AddSkillForm addSkill={addSkill as TAddSkill} />
            </Row>
          ) : null}
        </Row>
        <Row>
          <h3>TL;DR</h3>
          <p>
            Front-end engineer with 7+ years of experience in web development
            and design. Passionate in developing web applications and libraries
            that provide a great user experience. Strong background in graphic
            design and branding enables effective cross-team communication.
            Looking for more experience as a full stack or front-end engineer.
          </p>
        </Row>
        <Row>
          <h3>A bit more about me...</h3>
          <p>
            <CloudImage
              publicId="Xander_with_finger_paint"
              name="My son Xander finger painting with our dog Gizmo in the background."
              align="right"
              width="200"
              link={true}
            />
            I'm really passionate about design and making everything I touch on
            the web better. I'm never satisfied with my skillset and am
            constantly striving to be better and learn as much as I can when the
            time allows. There isn't time to learn everything though. My wife
            Lee and I had our son Xander {yearsSinceBirthday(20160216)} years
            ago and watching him grow and play with our shiba inu Gizmo has been
            my greatest joy in life.
          </p>
          <p>
            Recently I've dived head first into learning React and Typescript
            and am loving it. So much so I decided to build this portfolio with
            it to challenge myself. Do you need React to build a <em>simple</em>{' '}
            portfolio site? <strong>Of course not.</strong> Is actually building
            something in production the best way to learn something?{' '}
            <strong>¯\_(ツ)_/¯</strong>
            <br />
            You can find more of what I'm learning by{' '}
            <a
              href="https://github.com/jordandrako/"
              target="_blank"
              rel="noopener noreferrer"
            >
              inspecting my GitHub profile
            </a>
            .
          </p>
          <p>
            <strong>My worklow: </strong>I have used many systems, programs and
            workflows over the years, jumping back forth between Windows and
            Linux. Currently, I'm most comfortable using{' '}
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              VS Code
            </a>
            .
          </p>
          <p>
            <strong>In my spare time</strong> I enjoy being the biggest nerd
            possible. I build PCs, build home automation systems, manage linux
            and media servers. Mostly, though, I play PC games. If you'd like to
            add me on{' '}
            <a
              href="https://steamcommunity.com/id/jordandrako/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Steam, here's my community page
            </a>
            . I'm also obsessed with making the best coffee possible; my
            favorite brewing methods are the Chemex, Kalita Wave and my Behmor
            Brazen Plus.
          </p>
        </Row>
        <Row>
          <h2>Work History</h2>
          <HistoryRow>
            <DateColumn>
              <p>Oct 2020 - Present</p>
            </DateColumn>
            <HistoryColumn>
              <h3>User Experience Engineer (FTE)</h3>
              <h4>
                <em>
                  <a
                    href="https://www.bpcs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blueprint
                  </a>
                </em>
              </h4>
              <ul>
                <li>
                  Handled challenges of remote work during the COVID-19 pandemic
                  while minimizing disruption to output.
                </li>
                <li>
                  Worked with a portfolio of top-tier clients to build and
                  improve on a variety of web application products by
                  implementing best user experience practices.
                </li>
                <li>
                  Contributed to a redesign and prototype of Blueprint’s
                  flagship product, Conduit, which informed key decisions for
                  the product’s next versions.
                </li>
                <li>
                  Supported an overseas team to deliver the next generation of
                  Conduit on a tight deadline.
                </li>
                <li>
                  Contributed to the React frontend of a mature proprietary
                  data-visualization application created by massive
                  Redmond-based company.
                </li>

                <li>
                  <strong>Tech stack and skills:</strong> React, TypeScript,
                  Vue, Angular, Agile
                </li>
              </ul>
            </HistoryColumn>
          </HistoryRow>
          <HistoryRow>
            <DateColumn>
              <p>Aug 2019 - Oct 2020</p>
            </DateColumn>
            <HistoryColumn>
              <h3>Front-End Developer (Contract)</h3>
              <h4>
                <em>
                  <a
                    href="https://www.libertymutual.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Liberty Mutual
                  </a>
                </em>
              </h4>
              <ul>
                <li>
                  Made key decisions on company-wide design systems and
                  component libraries.
                </li>
                <li>
                  Contributed to internal design system component repository
                  using React and TypeScript.
                </li>
                <li>
                  Pioneered the switch from multiple repositories to a
                  consolidated monorepo using Yarn Workspaces and Lerna, which
                  has increased productivity and has been used as a template for
                  other teams within the company.
                </li>
                <li>
                  Contributed to design system documentation website using React
                  and Nextjs.
                </li>

                <li>
                  <strong>Tech stack and skills:</strong> React, TypeScript,
                  Jest, Enzyme, React Testing Library, Git, Kanban
                </li>
              </ul>
            </HistoryColumn>
          </HistoryRow>
          <HistoryRow>
            <DateColumn>
              <p>Jan 2018 - July 2019</p>
            </DateColumn>
            <HistoryColumn>
              <h3>UX Engineer (Contract)</h3>
              <h4>
                <em>
                  <a
                    href="https://microsoft.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Microsoft
                  </a>{' '}
                  through{' '}
                  <a
                    href="https://aquent.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Aquent
                  </a>
                </em>
              </h4>
              <ul>
                <li>
                  Contributed to several projects centered around{' '}
                  <a
                    href="https://github.com/OfficeDev/office-ui-fabric-react"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Office UI Fabric React
                  </a>
                  , Microsoft's official open-source UI framework for building
                  experience for Office 365.
                </li>
                <li>
                  Engineered an internal Human Interface Guidelines (HIG) site
                  for Fabric that included rich documentation for designers,
                  engineers, and product managers using React and TypeScript.
                </li>
                <li>
                  Worked to port the internal HIG site code to rebuild the
                  public site for{' '}
                  <a
                    href="https://uifabric.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Office UI Fabric
                  </a>
                  .
                </li>
                <li>
                  <strong>Tech stack and skills:</strong> React, TypeScript,
                  Jest, Enzyme, Azure, Git, Kanban
                </li>
              </ul>
            </HistoryColumn>
          </HistoryRow>
          <HistoryRow>
            <DateColumn>
              <p>Nov 2015 - Nov 2017</p>
            </DateColumn>
            <HistoryColumn>
              <h3>Front-End UX Engineer (FTE)</h3>
              <h4>
                <em>
                  <a
                    href="https://outreachmediagroup.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Outreach Inc.
                  </a>
                </em>
              </h4>
              <ul>
                <li>
                  Created and managed landing pages and creative graphics on the
                  Cost Per Lead team using adaptive web designs to generate
                  leads for clients' advertising campaigns.
                </li>
                <li>
                  Found creative solutions using JavaScript to enhance the
                  features of landing pages.
                </li>
                <li>
                  A/B tested and optimized conversion rates to find the perfect
                  design for each client.
                </li>
                <li>
                  Converted the team to a Kanban task system to optimize
                  communication and workflow.
                </li>
                <li>
                  Improved company margins by finding creative, strong
                  alternatives to expensive services.
                </li>
                <li>
                  Adapted to many managerial and life changes through the length
                  of employment.
                </li>
                <li>
                  <strong>Tech stack and skills:</strong> JavaScript, REST APIs,
                  A/B Testing, AWS, Git, Kanban
                </li>
              </ul>
            </HistoryColumn>
          </HistoryRow>
          <HistoryRow>
            <DateColumn>
              <p>Aug 2014 - Nov 2015</p>
            </DateColumn>
            <HistoryColumn>
              <h3>Front-End Developer and Graphic Designer (FTE)</h3>
              <h4>
                <em>
                  <a
                    href="https://uzu-media.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    UZU Media
                  </a>
                </em>
              </h4>
              <ul>
                <li>
                  Designed, developed and maintained client websites built with
                  WordPress or other CMSs.
                </li>
                <li>
                  Led the design process, from exploration to print, of client
                  branding.
                </li>
                <li>
                  <strong>Tech stack and skills:</strong> WordPress, HTML, CSS,
                  Photoshop, Illustrator, InDesign
                </li>
              </ul>
            </HistoryColumn>
          </HistoryRow>
          <HistoryRow>
            <DateColumn>
              <p>Jan 2014 - Aug 2014</p>
            </DateColumn>
            <HistoryColumn>
              <h3>Internships - Graphic Design and Junior Developer</h3>
              <h4>
                <em>Diversified Machine Systems &amp; Helium, Inc</em>
              </h4>
            </HistoryColumn>
          </HistoryRow>
        </Row>
        <Row>
          <h2>Education</h2>
          <Flex>
            <DateColumn>
              <p>Aug 2014</p>
            </DateColumn>
            <HistoryColumn>
              <h3>
                Associates in Multimedia Graphic Design with a focus on Web
                Development
              </h3>
              <h4>
                <em>Pikes Peak Community College</em>
              </h4>
              <p>
                Learned the process of designing for print and web, along with
                other college things. Most of my knowledge is self taught.
              </p>
              <ul>
                <li>
                  Integrated landing pages with back-end software to deliver
                  filtered, targeted, quality leads to many clients' CRMs
                </li>
                <li>
                  Improved company margins by finding creative, strong
                  alternatives to expensive services.
                </li>
                <li>
                  Adapted to many managerial and life changes through the length
                  of employment.
                </li>
              </ul>
            </HistoryColumn>
          </Flex>
        </Row>
        <Row>
          <p>Want this to go?</p>
          <Button
            href="https://1drv.ms/w/s!AiOn_Ae2sW-_qfgMiLv3mjWJJboLGw?e=Kas9Ka"
            target="_blank"
            buttonType={ButtonType.Cta}
            icon="file-text"
          >
            Download My Resume
          </Button>
        </Row>
      </>
    );
  }

  private _removeSkill = (key: string): void => {
    this.props.removeSkill(key);
  };

  private _renderList = (category: string): (JSX.Element | undefined)[] => {
    const { skills } = this.props;
    return Object.keys(skills).map((key) => {
      const skill = skills[key] && skills[key];
      if (skill && skill.category === category) {
        return (
          <li key={key}>
            {skill.name}
            {isLoggedIn() && (
              <Button
                buttonType={ButtonType.Delete}
                onClick={this._removeSkill.bind(this, key)}
              />
            )}
          </li>
        );
      }
      return undefined;
    });
  };
}

export default About;
