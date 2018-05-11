import * as React from 'react';
import { palette } from '../../../../styling';
import { truncate } from '../../../../utilities';
import { IImage, IProjectObject } from '../../../App.types';
import { Row } from '../../../containers/Grid/grid';
import Button from '../../Button';
import Dropzone from '../FormUtilities/Dropzone';
import StyledForm from '../StyledForm';
import * as Styled from './AddProjectForm.styles';
import { IAddProjectFormProps } from './AddProjectForm.types';

interface IAddProjectFormState {
  images: IImage[];
  skillValues: string[];
}

export default class AddProjectForm extends React.Component<
  IAddProjectFormProps,
  IAddProjectFormState
> {
  private _form: React.RefObject<HTMLFormElement>;
  private _category: React.RefObject<HTMLInputElement>;
  private _clientIndustry: React.RefObject<HTMLInputElement>;
  private _clientName: React.RefObject<HTMLInputElement>;
  private _link: React.RefObject<HTMLInputElement>;
  private _longDesc: React.RefObject<HTMLTextAreaElement>;
  private _name: React.RefObject<HTMLInputElement>;
  private _repo: React.RefObject<HTMLInputElement>;
  private _shortDesc: React.RefObject<HTMLTextAreaElement>;

  public constructor(props: IAddProjectFormProps) {
    super(props);
    this._createProject = this._createProject.bind(this);
    this._addImage = this._addImage.bind(this);
    this._removeImage = this._removeImage.bind(this);
    this._handleValues = this._handleValues.bind(this);
    // this.handleChange = this.handleChange.bind(this);

    this._category = React.createRef();
    this._clientIndustry = React.createRef();
    this._clientName = React.createRef();
    this._link = React.createRef();
    this._longDesc = React.createRef();
    this._name = React.createRef();
    this._repo = React.createRef();
    this._shortDesc = React.createRef();

    this.state = {
      images: [],
      skillValues: [],
    };
  }

  public render(): JSX.Element {
    const { skills, cloudinary } = this.props;

    const list = Object.keys(this.state.images).map(key => (
      <Styled.uploadedImage key={key}>
        <img
          src={this.state.images[key].url}
          alt={this.state.images[key].name}
        />
        <Button
          type="delete"
          // tslint:disable-next-line jsx-no-lambda
          onClick={() => this._removeImage(key)}
          className="fa fa-times-circle close"
        />
      </Styled.uploadedImage>
    ));

    return (
      <div>
        <h3>Add a new project</h3>

        <StyledForm>
          <form
            ref={this._form}
            className="add-project"
            onSubmit={this._createProject}
          >
            <input
              ref={this._name}
              type="text"
              name="name"
              placeholder="Project Name"
              required={true}
            />
            <select
              name="category"
              placeholder="Project Category"
              required={true}
            >
              <optgroup label="Select Category">
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Landing Page">Landing Page</option>
              </optgroup>
            </select>

            <select
              multiple={true}
              name="skills"
              onChange={this._handleValues}
              size={Object.keys(skills).length + 4}
              required={true}
            >
              <option>Select skills (ctrl + click)</option>
              <optgroup label="Core Skills">
                {Object.keys(skills).map(
                  (key: string) =>
                    skills[key].category === 'core' && (
                      <option key={key} value={skills[key].name}>
                        {skills[key].name}
                      </option>
                    )
                )}
              </optgroup>
              <optgroup label="Library Skills">
                {Object.keys(skills).map(
                  key =>
                    skills[key].category === 'library' && (
                      <option key={key} value={skills[key].name}>
                        {skills[key].name}
                      </option>
                    )
                )}
              </optgroup>
              <optgroup label="Design Skills">
                {Object.keys(skills).map(
                  key =>
                    skills[key].category === 'design' && (
                      <option key={key} value={skills[key].name}>
                        {skills[key].name}
                      </option>
                    )
                )}
              </optgroup>
            </select>
            <textarea
              ref={this._shortDesc}
              name="short_desc"
              placeholder="Project Short Description (will default to truncated long description)"
            />
            <textarea
              ref={this._longDesc}
              name="long_desc"
              placeholder="Project Long Description"
              required={true}
            />
            <input
              ref={this._link}
              type="text"
              name="link"
              placeholder="Project link"
            />
            <input
              ref={this._repo}
              type="text"
              name="repo"
              placeholder="Project repository"
            />
            <p>Client info:</p>
            <input
              ref={this._clientName}
              type="text"
              name="client_name"
              placeholder="Client Name"
              required={true}
            />
            <input
              ref={this._clientIndustry}
              type="text"
              name="client_industry"
              placeholder="Industry"
              required={true}
            />
            <Row child={true}>
              <Dropzone
                addImage={this._addImage}
                accept="image/jpeg, image/png"
                cloudinary={cloudinary}
              />
              <Styled.uploadedImageList>{list}</Styled.uploadedImageList>
            </Row>
            <Button type="success" arrows={palette.lightwhite}>
              + Add Project
            </Button>
          </form>
        </StyledForm>
      </div>
    );
  }

  private _createProject(e: any): void {
    e.preventDefault();
    if (
      Object.keys(this.state.images).length === 0 &&
      this.state.images.constructor === Object
    ) {
      return alert('At least one image is required.'); // eslint-disable-line
    }
    const project: IProjectObject = {
      category: this._category.current!.value,
      client: {
        industry: this._clientIndustry.current!.value,
        name: this._clientName.current!.value,
      },
      images: this.state.images,
      link: encodeURI(this._link.current!.value),
      long_desc: this._longDesc.current!.value,
      name: this._name.current!.value,
      repo: encodeURI(this._repo.current!.value),
      short_desc:
        this._shortDesc.current!.value ||
        truncate(this._longDesc.current!.value, 145),
      skills: this.state.skillValues,
    };
    this.props.addProject(project);
    this._form.current!.reset();
    const state = { ...this.state };
    this.setState({
      ...state,
      images: [],
      skillValues: [],
    });
  }

  private _addImage(image: IImage): void {
    // const key = image.id;
    const images = [...this.state.images];
    images.push(image);
    this.setState({ images });
  }

  private _removeImage(index: string): void {
    const images = [...this.state.images];
    delete images[index];
    this.setState({ images });
    // TODO: use api to delete image from cloudinary
  }

  // private _handleChange(date: any) {
  //   const startDate = { startDate: date };
  //   this.setState({ startDate });
  // }

  private _handleValues(e: any): void {
    const result = [];
    const options = e.target && e.target.options;

    for (const option of options) {
      if (option.selected) {
        result.push(option.value || option.text);
      }
    }
    this.setState({ skillValues: result });
  }
}
