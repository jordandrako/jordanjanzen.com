import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AddSkillForm from '../AddSkillForm';
import Button from '../Button';

import { Page, Row } from '../../theme/grid';
import { colors, typography } from '../../theme/variables';
import { mediaMin } from '../../theme/style-utils';

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
    font-size: 0.85rem;

    ${mediaMin.phone`
      font-size: 0.75rem;
    `};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

class About extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
  }

  removeSkill(key) {
    this.props.removeSkill(key);
  }

  renderList(category) {
    return Object.keys(this.props.skills).map((key) => {
      if (this.props.skills[key].category === category) {
        return (
          <li key={key}>
            {this.props.skills[key].name}
            {this.props.uid ? (
              <Button
                to="#"
                type="delete"
                onClick={() => this.removeSkill(key)}
              />
            ) : null}
          </li>
        );
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
          {this.props.uid ? (
            <Row child>
              <AddSkillForm addSkill={this.props.addSkill} />
            </Row>
          ) : null}
        </Row>
        <Row>
          <h3>A bit about me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            consequatur labore voluptate ut voluptatum porro ex doloribus ad,
            molestias sed! Ducimus molestias cum incidunt eaque cupiditate,
            mollitia delectus asperiores voluptatum ipsum quibusdam, similique
            beatae ea facere praesentium libero provident placeat.
          </p>
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
