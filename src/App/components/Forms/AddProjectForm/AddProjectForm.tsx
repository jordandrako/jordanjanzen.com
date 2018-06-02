import { IImage, IProject } from 'App/App.types';
import * as React from 'react';
import { semanticColors } from 'styling';
import { truncate } from 'utilities';
import Button, { ButtonType } from '../../Button';
import { Row } from '../../Page';
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
  private _category: React.RefObject<HTMLSelectElement>;
  private _clientIndustry: React.RefObject<HTMLInputElement>;
  private _clientName: React.RefObject<HTMLInputElement>;
  private _link: React.RefObject<HTMLInputElement>;
  private _longDesc: React.RefObject<HTMLTextAreaElement>;
  private _name: React.RefObject<HTMLInputElement>;
  private _repo: React.RefObject<HTMLInputElement>;
  private _shortDesc: React.RefObject<HTMLTextAreaElement>;

  public constructor(props: IAddProjectFormProps) {
    super(props);

    this._form = React.createRef();
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
    const { skills } = this.props;

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
              ref={this._category}
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
                    skills[key]!.category === 'core' && (
                      <option key={key} value={skills[key]!.name}>
                        {skills[key]!.name}
                      </option>
                    )
                )}
              </optgroup>
              <optgroup label="Library Skills">
                {Object.keys(skills).map(
                  key =>
                    skills[key]!.category === 'library' && (
                      <option key={key} value={skills[key]!.name}>
                        {skills[key]!.name}
                      </option>
                    )
                )}
              </optgroup>
              <optgroup label="Design Skills">
                {Object.keys(skills).map(
                  key =>
                    skills[key]!.category === 'design' && (
                      <option key={key} value={skills[key]!.name}>
                        {skills[key]!.name}
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
            <Row isChild={true}>
              <Dropzone
                addImage={this._addImage}
                accept="image/jpeg, image/png"
              />
              <Styled.uploadedImageList>
                {this._renderUploadedImageList()}
              </Styled.uploadedImageList>
            </Row>
            <Button
              type="submit"
              buttonType={ButtonType.Submit}
              arrows={semanticColors.siteBackground}
            >
              + Add Project
            </Button>
          </form>
        </StyledForm>
      </div>
    );
  }

  private _renderUploadedImageList = () =>
    Object.keys(this.state.images).map(key => (
      <Styled.uploadedImage key={key}>
        <img
          src={this.state.images[key].url}
          alt={this.state.images[key].name}
        />
        <Button
          buttonType={ButtonType.Delete}
          // tslint:disable-next-line jsx-no-lambda
          onClick={() => this._removeImage(key)}
          className="fa fa-times-circle close"
        />
      </Styled.uploadedImage>
    ));

  private _createProject = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    if (
      Object.keys(this.state.images).length === 0 &&
      this.state.images.constructor === Object
    ) {
      return alert('At least one image is required.'); // eslint-disable-line
    }
    const project: IProject = {
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
    this.setState(prevState => ({
      ...prevState,
      images: [],
      skillValues: [],
    }));
  };

  private _addImage = (image: IImage): void => {
    const images = [...this.state.images];
    images.push(image);
    this.setState({ images });
  };

  private _removeImage = (index: string): void => {
    const images = [...this.state.images];
    delete images[index];
    this.setState({ images });
    // TODO: use api to delete image from cloudinary
  };

  private _handleValues = (ev: React.ChangeEvent<HTMLSelectElement>): void => {
    const result = [];
    const options = Array.from(ev.target.options);

    for (const option of options) {
      if (option.selected) {
        result.push(option.value || option.text);
      }
    }
    this.setState({ skillValues: result });
  };
}
