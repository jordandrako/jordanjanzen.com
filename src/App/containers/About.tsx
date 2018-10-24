import { IAboutProps, TAddSkill } from 'App/App.types';
import { isLoggedIn } from 'base';
import * as React from 'react';
import { fonts, palette, screenSizes, styled } from 'styling';
import { yearsSinceBirthday } from 'utilities';
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
  constructor(props: IAboutProps) {
    super(props);
  }

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
          <h3>A bit about me...</h3>
          <p>
            <CloudImage
              publicId='Xander_with_finger_paint'
              name='My son Xander finger painting with our dog Gizmo in the background.'
              align='right'
              width='200'
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
              href='https://github.com/jordandrako/'
              target='_blank'
              rel='noopener noreferrer'
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
              href='https://code.visualstudio.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              VS Code
            </a>
            , complimented by{' '}
            <a
              href='https://hyper.is'
              target='_blank'
              rel='noopener noreferrer'
            >
              Hyper
            </a>{' '}
            with zsh or{' '}
            <a
              href='http://cmder.net'
              target='_blank'
              rel='noopener noreferrer'
            >
              Cmder
            </a>
            .
          </p>
          <p>
            <strong>In my spare time</strong> I enjoy being the biggest nerd
            possible. I build PCs, build home automation systems, manage linux
            and media servers. Mostly, though, I play PC games. If you'd like to
            add me on{' '}
            <a
              href='https://steamcommunity.com/id/jordandrako/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Steam, here's my community page
            </a>
            . I'm also obsessed with making the best coffee possible; my
            favorite brewing methods are the Chemex, Kalita Wave and my{' '}
            <a
              href='https://sca.coffee/certified-home-brewer/'
              target='_blank'
              rel='noopener noreferrer'
            >
              SCA
            </a>{' '}
            certified Behmor Brazen Plus drip machine (like I said, obsessed).
          </p>
        </Row>
        <Row>
          <h2>Work History</h2>
          <HistoryRow>
            <DateColumn>
              <p>Jan 2018 - Now</p>
            </DateColumn>
            <HistoryColumn>
              <h3>UX Engineer</h3>
              <h4>
                <em>
                  <a
                    href='https://microsoft.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Microsoft
                  </a>{' '}
                  through{' '}
                  <a
                    href='https://aquent.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Aquent
                  </a>
                </em>
              </h4>
              <p>
                Member the OneDrive and SharePoint Design (ODSP) team using
                TypeScript, React, and cutting edge techniques to create open
                source software and Microsoft experiences. The primary
                responsibility is developing{' '}
                <a
                  href='https://github.com/OfficeDev/office-ui-fabric-react'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Office UI Fabric React
                </a>
                , the official front-end framework for building experiences that
                fit seamlessly into Office and Office 365.
              </p>
              <ul>
                <li>Produce clean, tested, maintainable code.</li>
                <li>Adhere to strict design language guidelines.</li>
                <li>
                  Develop within a large codebase that is integrated into dozens
                  of official Microsoft and 3rd-party products.
                </li>
                <li>
                  Work with a large team of people with a wider range of skills
                  and backgrounds.
                </li>
              </ul>
            </HistoryColumn>
          </HistoryRow>
          <HistoryRow>
            <DateColumn>
              <p>Nov 2015 - Nov 2017</p>
            </DateColumn>
            <HistoryColumn>
              <h3>Front-End UX Engineer</h3>
              <h4>
                <em>
                  <a
                    href='https://outreachmediagroup.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Outreach Inc.
                  </a>
                </em>
              </h4>
              <p>
                Work with the Outreach Media Group's Cost Per Lead team to
                create and manage landing pages and creative graphics targeted
                at church leaders and faith-based consumers. Employ adaptive web
                designs and creative development techniques to generate leads
                for corporate clients' programs and advertising campaigns. A/B
                test and optimize conversion rates to find the perfect design
                and fit for each individual clients' needs.
              </p>
              <ul>
                <li>
                  Integrated landing pages with back-end software to deliver
                  filtered, targeted, quality leads to many clients' CRMs and
                  REST APIs.
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
          </HistoryRow>
          <HistoryRow>
            <DateColumn>
              <p>Aug 2014 - Nov 2015</p>
            </DateColumn>
            <HistoryColumn>
              <h3>Lead WordPress Developer and Graphic Designer</h3>
              <h4>
                <em>
                  <a
                    href='https://uzu-media.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    UZU Media
                  </a>
                </em>
              </h4>
              <p>
                Design, develop and maintained websites built primarily with
                content management systems, primarily Wordpress. Lead the design
                process, from exploration to print, of client branding.
              </p>
              <ul>
                <li>Worked in a small, close team environment.</li>
                <li>
                  Used best practices to deliver strong and secure websites
                </li>
                <li>
                  Researched individual needs and explored many solutions with
                  each client.
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
              <p>May 2012 - Aug 2014</p>
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
            href='https://res.cloudinary.com/jordan-janzen/image/upload/v1511291826/Jordan_Janzen_CV.pdf'
            target='_blank'
            buttonType={ButtonType.Cta}
            icon='file-text'
          >
            Download My CV
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
    return Object.keys(skills).map(key => {
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
