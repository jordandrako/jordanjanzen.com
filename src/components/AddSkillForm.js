import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledForm from './StyledForm';
import Button from './Button';
import { colors } from '../theme/variables';

class AddSkillForm extends Component {
  constructor() {
    super();
    this.createSkill = this.createSkill.bind(this);
  }

  createSkill(e) {
    e.preventDefault();
    const skill = {
      name: this.name.value,
      category: this.category.value,
      icon: encodeURI(this.icon.value),
      confidence: this.confidence.value,
    };
    this.props.addSkill(skill);
    this.skillForm.reset();
  }

  render() {
    return (
      <div>
        <h3>Add a new skill</h3>
        <StyledForm>
          <form
            ref={(input) => {
              this.skillForm = input;
            }}
            className="add-skill"
            onSubmit={(e) => this.createSkill(e)}
          >
            <input
              ref={(input) => {
                this.name = input;
              }}
              type="text"
              name="name"
              placeholder="Skill"
              required
            />
            <select
              ref={(input) => {
                this.category = input;
              }}
              type="text"
              name="category"
              placeholder="Skill Category"
              required
            >
              <option>Select Category</option>
              <option value="front-end">Front-End Dev</option>
              <option value="back-end">Back-End Dev</option>
              <option value="framework">Framework</option>
              <option value="design">Design</option>
            </select>
            <input
              ref={(input) => {
                this.icon = input;
              }}
              type="text"
              name="icon"
              placeholder="Skill icon"
            />
            <label htmlFor="confidence">confidence</label>
            <input
              ref={(input) => {
                this.confidence = input;
              }}
              type="range"
              name="confidence"
              min="0"
              max="1"
              step="0.1"
              list="confidence_tickmarks"
            />
            <datalist id="confidence_tickmarks">
              <option value="0" label="0" />
              <option value="0.1" />
              <option value="0.2" />
              <option value="0.3" />
              <option value="0.4" />
              <option value="0.5" label="0.5" />
              <option value="0.6" />
              <option value="0.7" />
              <option value="0.8" />
              <option value="0.9" />
              <option value="1" label="1" />
            </datalist>

            <Button type="success" arrows={colors.lightwhite}>
              + Add Skill
            </Button>
          </form>
        </StyledForm>
      </div>
    );
  }
}

AddSkillForm.propTypes = {
  addSkill: PropTypes.func.isRequired,
};

export default AddSkillForm;
