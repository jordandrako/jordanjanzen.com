import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledForm from '../StyledForm';
import Button from '../Button';
import { palette } from '../../theme/theme';

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
      priority: this.priority.value,
      desc: this.desc.value,
      link: encodeURI(this.link.value),
      complete: false
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
              name="category"
              placeholder="Todo Category"
              required
            >
              <option value="">Select Category</option>
              <option value="design">Design</option>
              <option value="content">Content</option>
              <option value="component">Component</option>
              <option value="quality">Quality</option>
              <option value="backend">Backend</option>
              <option value="other">Other</option>
            </select>
            <select
              ref={(input) => {
                this.priority = input;
              }}
              name="priority"
            >
              <option value="2">Priority 2</option>
              <option value="1">Priority 1</option>
              <option value="0">Priority 0</option>
            </select>
            <textarea
              ref={(input) => {
                this.desc = input;
              }}
              type="text"
              name="desc"
              placeholder="Todo Description"
            />
            <input
              ref={(input) => {
                this.link = input;
              }}
              type="text"
              name="link"
              placeholder="Todo link"
            />
            <Button type="success" arrows={palette.lightwhite}>
              + Add Todo
            </Button>
          </form>
        </StyledForm>
      </div>
    );
  }
}

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodoForm;
