import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledForm from './StyledForm';
import Button from './Button';
import { colors } from '../theme/variables';

class AddTodoForm extends Component {
  constructor() {
    super();
    this.createTodo = this.createTodo.bind(this);
  }

  createTodo(e) {
    e.preventDefault();
    const todo = {
      name: this.name.value,
      category: this.category.value,
      desc: this.desc.value,
      link: encodeURI(this.link.value),
      complete: false,
    };
    this.props.addTodo(todo);
    this.todoForm.reset();
  }

  render() {
    return (
      <div>
        <h3>Add a new todo item</h3>
        <StyledForm>
          <form
            ref={(input) => {
              this.todoForm = input;
            }}
            className="add-todo"
            onSubmit={(e) => this.createTodo(e)}
          >
            <input
              ref={(input) => {
                this.name = input;
              }}
              type="text"
              name="name"
              placeholder="Todo"
              required
            />
            <select
              ref={(input) => {
                this.category = input;
              }}
              type="text"
              name="category"
              placeholder="Todo Category"
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
              placeholder="Todo Description"
              required
            />
            <input
              ref={(input) => {
                this.link = input;
              }}
              type="text"
              name="link"
              placeholder="Todo link"
            />
            <Button
              type="submit"
              styleType="success"
              arrows={colors.lightwhite}
            >
              + Add Todo
            </Button>
          </form>
        </StyledForm>
      </div>
    );
  }
}

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
