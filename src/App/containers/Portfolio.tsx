import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { isLoggedIn } from '../../base';
import { styled } from '../../styling';
import { IPortfolioProps } from '../App.types';
import AddProjectForm from '../components/Forms/AddProjectForm/AddProjectForm';
import { Page, Row } from '../components/Page';
import Project from '../components/Project/Project';
import ProjectSingle from '../components/Project/ProjectSingle/ProjectSingle';

const ListOfProjects = styled.ul`
  list-style-type: none;
  margin: 0 -0.5em;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

interface IPortfolioState {
  category?: string;
}

class Portfolio extends React.Component<IPortfolioProps, IPortfolioState> {
  constructor(props: IPortfolioProps) {
    super(props);

    this.state = {
      category: 'all',
    };
  }

  public render(): JSX.Element {
    const { addProject, projects, skills } = this.props;

    return (
      <Page title="Portfolio">
        {projects &&
          Object.keys(projects).length > -1 && (
            <Row>
              <ListOfProjects>
                {Object.keys(projects)
                  .reverse()
                  .map(key => (
                    <Project key={key} index={key} details={projects[key]!} />
                  ))}
              </ListOfProjects>
            </Row>
          )}
        {isLoggedIn() && skills ? (
          <Row>
            <AddProjectForm addProject={addProject} skills={skills} />
          </Row>
        ) : null}
        <Route
          exact={true}
          path="/portfolio/:projectId"
          render={this._renderProjectSingle}
        />
      </Page>
    );
  }

  private _renderProjectSingle = (routeProps: RouteComponentProps<any>) => (
    <ProjectSingle
      isMobile={this.props.isMobile}
      projects={this.props.projects}
      index={routeProps.match.params.projectId}
      details={this.props.projects[routeProps.match.params.projectId]!}
      removeProject={this.props.removeProject}
      {...routeProps}
    />
  );
}

export default Portfolio;
