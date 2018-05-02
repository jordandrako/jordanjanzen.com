import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StyledForm } from '../StyledForm';
import { Button } from '../Button';
import { ImageDropzone } from './FormUtilities/Dropzone';

import { colors, Row } from '../../../styling';

import { truncate } from '../../../utilities';

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

  .close {
    position: absolute;
    top: 5px;
    right: 5px;
    margin: 0;
  }
`;

export class AddProjectForm extends Component {
  constructor() {
    super();
    this.createProject = this.createProject.bind(this);
    this.addImage = this.addImage.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.handleValues = this.handleValues.bind(this);
    // this.handleChange = this.handleChange.bind(this);

    this.state = {
      images: {},
      skillValues: []
      // startDate: moment(),
    };
  }

  createProject(e) {
    e.preventDefault();
    if (
      Object.keys(this.state.images).length === 0 &&
      this.state.images.constructor === Object
    ) {
      return alert('At least one image is required.'); // eslint-disable-line
    }
    const project = {
      name: this.name.value,
      long_desc: this.long_desc.value,
      short_desc: this.short_desc.value || truncate(this.long_desc.value, 145),
      category: this.category.value,
      skills: this.state.skillValues,
      images: this.state.images,
      link: encodeURI(this.link.value),
      repo: encodeURI(this.repo.value),
      client: {
        name: this.client_name.value,
        industry: this.client_industry.value
      }
      // date: this.state.startDate,
    };
    this.props.addProject(project);
    this.projectForm.reset();
    const state = { ...this.state };
    this.setState({
      ...state,
      images: {},
      skillValues: []
      // startDate: moment().day,
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
    // TODO: use api to delete image from cloudinary
  }

  handleChange(date) {
    const startDate = { ...this.state, startDate: date };
    this.setState({ ...startDate });
  }

  handleValues(e) {
    const result = [];
    const options = e.target && e.target.options;
    let opt;

    for (let i = 0; i < options.length; i += 1) {
      opt = options[i];
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    this.setState({ skillValues: result });
  }

  render() {
    const { skills, cloudinary } = this.props;

    const list = Object.keys(this.state.images).map((key) => (
      <UploadedImage key={key}>
        <img
          src={this.state.images[key].url}
          alt={this.state.images[key].name}
        />
        <Button
          type="delete"
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
              <optgroup label="Select Category">
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Landing Page">Landing Page</option>
              </optgroup>
            </select>
            {/* <DatePicker
              fixedHeight
              todayButton={'Today'}
              selected={this.state.startDate}
              onChange={this.handleChange}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              required
            /> */}
            <select
              ref={(input) => {
                this.skills = input;
              }}
              multiple="multiple"
              name="skills"
              placeholder="Project Skills"
              onChange={(e) => this.handleValues(e)}
              size={Object.keys(skills).length + 4}
              required
            >
              <option>Select skills (ctrl + click)</option>
              <optgroup label="Core Skills">
                {Object.keys(skills).map(
                  (key) =>
                    skills[key].category === 'core' && (
                      <option key={key} value={skills[key].name}>
                        {skills[key].name}
                      </option>
                    )
                )}
              </optgroup>
              <optgroup label="Library Skills">
                {Object.keys(skills).map(
                  (key) =>
                    skills[key].category === 'library' && (
                      <option key={key} value={skills[key].name}>
                        {skills[key].name}
                      </option>
                    )
                )}
              </optgroup>
              <optgroup label="Design Skills">
                {Object.keys(skills).map(
                  (key) =>
                    skills[key].category === 'design' && (
                      <option key={key} value={skills[key].name}>
                        {skills[key].name}
                      </option>
                    )
                )}
              </optgroup>
            </select>
            <textarea
              ref={(input) => {
                this.short_desc = input;
              }}
              type="text"
              name="short_desc"
              placeholder="Project Short Description (will default to truncated long description)"
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
            <input
              ref={(input) => {
                this.repo = input;
              }}
              type="text"
              name="repo"
              placeholder="Project repository"
            />
            <p>Client info:</p>
            <input
              ref={(input) => {
                this.client_name = input;
              }}
              type="text"
              name="client_name"
              placeholder="Client Name"
              required
            />
            <input
              ref={(input) => {
                this.client_industry = input;
              }}
              type="text"
              name="client_industry"
              placeholder="Industry"
              required
            />
            <Row child>
              <ImageDropzone
                addImage={this.addImage}
                accept="image/jpeg, image/png"
                cloudinary={cloudinary}
              />
              <UploadedImageList>{list}</UploadedImageList>
            </Row>
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
  cloudinary: PropTypes.shape({
    key: PropTypes.string,
    secret: PropTypes.string
  })
};

AddProjectForm.defaultProps = {
  cloudinary: {
    key: undefined,
    secrect: undefined
  }
};

export default AddProjectForm;
