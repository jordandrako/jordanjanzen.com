import * as React from 'react';
import { palette } from 'styling';
import Button, { ButtonType } from '../../Button';
import StyledForm from '../StyledForm';
import { IAddSkillFormProps } from './AddSkillForm.types';

export default class AddSkillForm extends React.Component<
  IAddSkillFormProps,
  {}
> {
  private _form: React.RefObject<HTMLFormElement>;
  private _name: React.RefObject<HTMLInputElement>;
  private _category: React.RefObject<HTMLSelectElement>;

  public constructor(props: IAddSkillFormProps) {
    super(props);
    this._form = React.createRef();
    this._name = React.createRef();
    this._category = React.createRef();
  }

  public render(): JSX.Element {
    return (
      <div>
        <h3>Add a new skill</h3>
        <StyledForm>
          <form
            ref={this._form}
            className='add-skill'
            onSubmit={this._createSkill}
          >
            <input
              ref={this._name}
              type='text'
              name='name'
              placeholder='Skill'
              required={true}
            />
            <select
              ref={this._category}
              name='category'
              placeholder='Skill Category'
              required={true}
            >
              <option>Select Category</option>
              <option value='core'>Core</option>
              <option value='library'>Library</option>
              <option value='design'>Design</option>
            </select>

            <Button
              buttonType={ButtonType.Submit}
              type='submit'
              arrows={palette.lightwhite}
            >
              + Add Skill
            </Button>
          </form>
        </StyledForm>
      </div>
    );
  }

  private _createSkill = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    const skill = {
      category: this._category.current!.value,
      name: this._name.current!.value,
    };
    this.props.addSkill(skill);
    this._form.current!.reset();
  };
}
