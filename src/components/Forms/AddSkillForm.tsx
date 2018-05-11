import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledForm from '../StyledForm';
import Button from '../../App/components/Button';
import { palette } from '../../styling/theme';

class AddSkillForm extends Component {
  public constructor(props: any) {
    super(props);
    this.createSkill = this.createSkill.bind(this);
  }

  createSkill(e) {
    e.preventDefault();
    const skill = {
      name: this.name.value,
      category: this.category.value
    };
    this.props.addSkill(skill);
    this.skillForm.reset();
  }

  public render(): JSX.Element {
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
              <option value="core">Core</option>
              <option value="library">Library</option>
              <option value="design">Design</option>
            </select>

            <Button type="success" arrows={palette.lightwhite}>
              + Add Skill
            </Button>
          </form>
        </StyledForm>
      </div>
    );
  }
}

AddSkillForm.propTypes = {
  addSkill: PropTypes.func.isRequired
};

export default AddSkillForm;
