import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AddSkillForm from '../AddSkillForm';

import { Page, Row } from '../../theme/grid';
import { colors, typography } from '../../theme/variables';
import { mediaMin } from '../../theme/style-utils';

const SkillsRow = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  margin-right: -2px;
`;

const SkillsColumn = styled.ul`
  flex: 1;
  padding: 0 0 1em;
  margin: 0 0 1em;
  list-style: none;
  min-width: 200px;

  h3,
  li {
    text-align: center;
  }

  h3 {
    color: ${colors.blue};
    padding: 0.5em 0;
    margin: 0 0 0.75em 0;
    border-bottom: 2px solid ${colors.blue};
  }

  li {
    font-family: ${typography.monospace};
    line-height: 1.5;
    padding: 0 1em;
    margin: 1em 0;
    font-size: 0.85em;

    ${mediaMin.phone`
      font-size: 0.75em;
    `};
  }
`;

class About extends Component {
  constructor(props) {
    super(props);
    this.removeSkill = this.removeSkill.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  removeSkill(key) {
    this.props.removeSkill(key);
  }

  renderList(category) {
    return Object.keys(this.props.skills).map((key) => {
      if (this.props.skills[key].category === category) {
        return <li key={key}>{this.props.skills[key].name}</li>;
      }
      return null;
    });
  }

  render() {
    return (
      <Page title="About">
        <Row>
          <h2>About, Skills and Interests</h2>
          <SkillsRow child>
            <SkillsColumn>
              <h3>Core</h3>
              {this.renderList('core')}
            </SkillsColumn>
            <SkillsColumn>
              <h3>Libraries</h3>
              {this.renderList('library')}
            </SkillsColumn>
            <SkillsColumn>
              <h3>Design</h3>
              {this.renderList('design')}
            </SkillsColumn>
          </SkillsRow>
          <Row child>
            {this.props.uid ? (
              <AddSkillForm addSkill={this.props.addSkill} />
            ) : null}
          </Row>
        </Row>
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
