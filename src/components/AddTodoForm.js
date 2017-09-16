import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-autosize-textarea';

import { colors } from '../theme/variables';
import Button from './Button';
import Form from './Form';

class AddTodoForm extends Component {
  createTodo(event) {
    event.preventDefault();
    const todo = {
      name: this.name.value,
      cat: this.cat.value,
      desc: this.desc.value,
      link: this.link.value,
      status: 'incomplete',
    };
    this.props.addTodo(todo);
    // this.todoForm.reset();
  }

  render() {
    return (
      <div>
        <h3>Add a new todo item</h3>
        <Form
          ref={input => (this.todoForm = input)}
          className="add-todo"
          onSubmit={e => this.createTodo(e)}
        >
          <input ref={input => (this.name = input)} type="text" placeholder="Todo" />
          <select ref={input => (this.cat = input)} type="text" placeholder="Todo Category">
            <option value="design">Design</option>
            <option value="component">Component</option>
            <option value="quality">Quality</option>
            <option value="backend">Backend</option>
          </select>
          <TextareaAutosize
            ref={input => (this.desc = input)}
            type="text"
            placeholder="Todo Desc"
          />
          <input ref={input => (this.link = input)} type="text" placeholder="Todo link" />
          <Button type="submit" bg={colors.green}>
            + Add Todo
          </Button>
        </Form>
      </div>
    );
  }
}

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
