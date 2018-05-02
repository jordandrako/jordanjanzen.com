import React from 'react';

export const SkillContext = React.createContext();

export function withSkills(Component) {
  return function ComponentWithSkills(props) {
    return (
      <SkillContext.Consumer>
        {(skills) => <Component {...props} skills={skills} />}
      </SkillContext.Consumer>
    );
  };
}
