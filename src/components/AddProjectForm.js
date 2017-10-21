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
      short_desc: this.short_desc.value,
      long_desc: this.long_desc.value,
      category: this.category.value,
      skills: this.skills.value,
      image: this.image.value,
      link: encodeURI(this.link.value),
      client: {
        name: this.client_name.value,
        industry: this.client_industry.value,
      },
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
              placeholder="Project Name"
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
              <option value="development">Development</option>
              <option value="landing-page">Landing Page</option>
            </select>
            <select
              ref={(input) => {
                this.skills = input;
              }}
              multiple="multiple"
              name="skills"
              placeholder="Project Skills"
              required
            >
              <option>Select Skills (Ctrl + Click)</option>
              {Object.keys(this.props.skills).map((key) => (
                <option key={key} value={this.props.skills[key].name}>
                  {this.props.skills[key].name}
                </option>
              ))}
            </select>
            <textarea
              ref={(input) => {
                this.short_desc = input;
              }}
              type="text"
              name="short_desc"
              placeholder="Project Short Description"
              required
            />
            <textarea
              ref={(input) => {
                this.long_desc = input;
              }}
              type="text"
              name="long_desc"
              placeholder="Project Long Description"
              required
            />
            <input
              ref={(input) => {
                this.image = input;
              }}
              type="text"
              name="image"
              placeholder="Project image"
            />
            <input
              ref={(input) => {
                this.link = input;
              }}
              type="text"
              name="link"
              placeholder="Project link"
            />
            <p>Client info:</p>
            <input
              ref={(input) => {
                this.client_name = input;
              }}
              type="text"
              name="client_name"
              placeholder="Client Name"
            />
            <input
              ref={(input) => {
                this.client_industry = input;
              }}
              type="text"
              name="client_industry"
              placeholder="Industry"
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
  skills: PropTypes.object.isRequired,
};

export default AddProjectForm;
