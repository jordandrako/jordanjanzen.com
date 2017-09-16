import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    this.todoForm.reset();
  }

  render() {
    return (
      <form
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
        <textarea ref={input => (this.desc = input)} type="text" placeholder="Todo Desc" />
        <input ref={input => (this.link = input)} type="text" placeholder="Todo link" />
        <button type="submit">+ Add Todo</button>
      </form>
    );
  }
}

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
