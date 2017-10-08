import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledForm from './StyledForm';
import Button from './Button';
import { colors } from '../theme/variables';

class AddProjectForm extends Component {
  constructor() {
    super();
    this.createProject = this.createProject.bind(this);
  }

  createProject(e) {
    e.preventDefault();
    const project = {
      name: this.name.value,
      category: this.category.value,
      desc: this.desc.value,
      link: encodeURI(this.link.value),
      complete: false,
    };
    this.props.addProject(project);
    this.projectForm.reset();
  }

  render() {
    return (
      <div>
        <h3>Add a new project</h3>
        <StyledForm>
          <form
            ref={(input) => {
              this.projectForm = input;
            }}
            className="add-project"
            onSubmit={(e) => this.createProject(e)}
          >
            <input
              ref={(input) => {
                this.name = input;
              }}
              type="text"
              name="name"
              placeholder="Project"
              required
            />
            <select
              ref={(input) => {
                this.category = input;
              }}
              type="text"
              name="category"
              placeholder="Project Category"
              required
            >
              <option>Select Category</option>
              <option value="design">Design</option>
              <option value="component">Component</option>
              <option value="quality">Quality</option>
              <option value="backend">Backend</option>
            </select>
            <textarea
              ref={(input) => {
                this.desc = input;
              }}
              type="text"
              name="desc"
              placeholder="Project Description"
              required
            />
            <input
              ref={(input) => {
                this.link = input;
              }}
              type="text"
              name="link"
              placeholder="Project link"
            />
            <Button type="success" arrows={colors.lightwhite}>
              + Add Project
            </Button>
          </form>
        </StyledForm>
      </div>
    );
  }
}

AddProjectForm.propTypes = {
  addProject: PropTypes.func.isRequired,
};

export default AddProjectForm;
