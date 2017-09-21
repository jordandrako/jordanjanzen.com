import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';

import StyledForm from './StyledForm';
import { colors } from '../theme/variables';

const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: 1em;
  flex-grow: 1;
  padding: 0 0.2em;

  .flag {
    display: flex;
    flex-direction: column;
    border: 5px double ${colors.black};

    .complete {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: ${(props) =>
        props.isComplete ? colors.green : colors.lightblack};
      color: ${colors.black};
      padding: 5px;
      border: none;
      white-space: nowrap;
      cursor: pointer;
      transition: all 0.15s ease-in-out;
      flex-grow: 1;

      .checkbox {
        width: 20px;
        height: 20px;
        border: 2px solid ${colors.black};
        border-radius: 50%;
        position: relative;

        :after {
          transition: all 0.1s ease-in-out;
          content: '';
          display: block;
          background: ${colors.black};
          width: 12px;
          height: 12px;
          top: 2px;
          left: 2px;
          transform: ${(props) => (props.isComplete ? 'scale(1)' : 'scale(0)')};
          border-radius: 50%;
          position: absolute;
        }
      }

      .label {
        transform: rotate(90deg);
        width: 0;
        user-select: none;
      }
    }

    .remove {
      border: none;
      border-top: 2px solid ${colors.black};
      background: ${colors.red};
      width: 100%;
      height: 30px;
      position: relative;
      padding: 0;
      margin: 0;
      cursor: pointer;

      div {
        position: absolute;
        top: calc(50% - 2px);
        left: 20%;
        width: 60%;
        height: 4px;
        background: ${colors.black};
        border-radius: 2px;
      }
    }
  }
`;

class Todo extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.renderTodo = this.renderTodo.bind(this);
  }

  removeTodo(e, key) {
    this.props.removeTodo(key);
  }

  handleChange(e, key) {
    const updatedProp = {
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    };
    this.props.updateTodo(key, updatedProp);
  }

  toggleComplete(e, key) {
    const updatedProp = {
      complete: !this.props.details.complete,
    };
    this.props.updateTodo(key, updatedProp);
  }

  renderTodo() {
    const { details, index } = this.props;
    const link = details.link ? (
      <p>
        <a target="_blank" rel="noopener noreferrer" href={details.link}>
          {decodeURI(details.link)}
        </a>
      </p>
    ) : null;

    return (
      <Item className="todo-item" key={index} isComplete={details.complete}>
        <div className="flag">
          <button
            className="complete"
            onClick={(e) => this.toggleComplete(e, index)}
          >
            <div className="checkbox" />
            <p className="label">COMPLETE</p>
          </button>
          <button className="remove" onClick={(e) => this.removeTodo(e, index)}>
            <div />
          </button>
        </div>
        <StyledForm>
          <input
            type="text"
            name="name"
            defaultValue={details.name}
            placeholder="Todo"
            onChange={(e) => this.handleChange(e, index)}
          />
          <select
            type="text"
            name="category"
            defaultValue={details.category}
            onChange={(e) => this.handleChange(e, index)}
          >
            <option>Category</option>
            <option value="design">Design</option>
            <option value="component">Component</option>
            <option value="quality">Quality</option>
            <option value="backend">Backend</option>
          </select>
          <TextareaAutosize
            type="text"
            name="desc"
            defaultValue={details.desc}
            placeholder="Description"
            onChange={(e) => this.handleChange(e, index)}
          />
          {link}
        </StyledForm>
      </Item>
    );
  }

  render() {
    return this.renderTodo();
  }
}

Todo.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
};

export default Todo;
