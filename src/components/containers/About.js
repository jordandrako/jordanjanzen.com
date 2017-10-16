import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Page, Row } from '../Grid';
import AddSkillForm from '../AddSkillForm';

class About extends Component {
  constructor(props) {
    super(props);
    this.removeSkill = this.removeSkill.bind(this);
  }

  removeSkill(e, key) {
    this.props.removeSkill(key);
  }

  render() {
    const { skills } = this.props;

    return (
      <Page title="About">
        <Row>
          <h2>My Skills</h2>
          <ul>
            {Object.keys(skills).map((key) => (
              <li key={key}>
                <img
                  src={skills[key].icon}
                  alt={`${skills[key].name.replace(' ', '-')}-icon`}
                  width={40}
                  height={40}
                  align="left"
                />
                <p>
                  <strong>{skills[key].name}</strong>
                </p>
                <p>Confidence:</p>
                <progress value={skills[key].confidence} max="1">
                  {skills[key].confidence * 100} %
                </progress>
                {this.props.uid ? (
                  <button onClick={(e) => this.removeSkill(e, key)}>
                    &times;
                  </button>
                ) : null}
              </li>
            ))}
          </ul>
        </Row>
        {this.props.uid ? (
          <Row>
            <AddSkillForm addSkill={this.props.addSkill} />
          </Row>
        ) : null}
      </Page>
    );
  }
}

About.propTypes = {
  uid: PropTypes.string,
  skills: PropTypes.object.isRequired,
  addSkill: PropTypes.func.isRequired,
  removeSkill: PropTypes.func.isRequired,
};

About.defaultProps = {
  uid: null,
};

export default About;
