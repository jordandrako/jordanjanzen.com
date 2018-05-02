import React from 'react';

export const ProjectContext = React.createContext();

export function withProjects(Component) {
  return function ComponentWithProjects(props) {
    return (
      <ProjectContext.Consumer>
        {(projects) => <Component {...props} projects={projects} />}
      </ProjectContext.Consumer>
    );
  };
}
