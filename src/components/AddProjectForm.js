import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

import StyledForm from './StyledForm';
import Button from './Button';
import Dropzone from './Dropzone';

import { colors } from '../theme/variables';

const UploadedImageList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const UploadedImage = styled.li`
  margin: 0 1em 1em 0;
  max-width: calc(33.3% - 1em);
  padding: 1em;
  border: 2px solid ${colors.black};
  background: ${colors.lightblack};
  position: relative;

  button {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 25px;
    margin: 0;
    padding: 0;
    width: 20px;
    height: 20px;
    line-height: 20px;
    opacity: 0.7;
    color: ${colors.red};
    background: ${colors.black};
    transition: all 0.15s ease-in;
    border: none;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`;

class AddProjectForm extends Component {
  constructor() {
    super();
    this.createProject = this.createProject.bind(this);
    this.addImage = this.addImage.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleValues = this.handleValues.bind(this);

    this.state = {
      images: {},
      startDate: moment(),
      skillValues: [],
    };
  }

  createProject(e) {
    e.preventDefault();
    const project = {
      name: this.name.value,
      short_desc: this.short_desc.value,
      long_desc: this.long_desc.value,
      category: this.category.value,
      date: this.state.startDate,
      skills: this.state.skillValues,
      images: this.state.images,
      link: encodeURI(this.link.value),
      client: {
        name: this.client_name.value,
        industry: this.client_industry.value,
      },
    };
    this.props.addProject(project);
    this.projectForm.reset();
    const state = { ...this.state };
    this.setState({
      ...state,
      images: {},
    });
  }

  addImage(image) {
    const key = image.id;
    const images = { ...this.state.images };
    images[key] = image;
    this.setState({ images });
  }

  removeImage(key) {
    const images = { ...this.state.images };
    delete images[key];
    this.setState({ images });
  }

  handleChange(date) {
    const startDate = { ...this.state, startDate: date };
    this.setState({ startDate });
  }

  handleValues(select) {
    const result = [];
    const options = select && select.options;
    let opt;

    for (let i = 0; i < options.length; i++) {
      opt = options[i];
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    this.setState({ skillValues: result });
  }

  render() {
    const list = Object.keys(this.state.images).map((key) => (
      <UploadedImage key={key}>
        <img
          src={this.state.images[key].url}
          alt={this.state.images[key].name}
        />
        <button
          onClick={() => this.removeImage(key)}
          className="fa fa-times-circle close"
        />
      </UploadedImage>
    ));

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
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              required
            />
            <select
              ref={(input) => {
                this.skills = input;
              }}
              multiple="multiple"
              name="skills"
              placeholder="Project Skills"
              onChange={this.handleValues}
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
        <Dropzone addImage={this.addImage} accept="image/jpeg, image/png" />

        <UploadedImageList>{list}</UploadedImageList>
      </div>
    );
  }
}

AddProjectForm.propTypes = {
  addProject: PropTypes.func.isRequired,
  skills: PropTypes.object.isRequired,
};

export default AddProjectForm;
