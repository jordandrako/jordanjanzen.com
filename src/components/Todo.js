import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import { colors } from '../theme/variables';

const Todo = (props) => {
  const isComplete = props.details.status === 'complete';

  return (
    <li className="todo-item">
      <input type="checkbox" name={props.index} id={props.index} checked={isComplete} />
      <h3 className="todo-name" style={isComplete && 'text-decoration: line-though;'}>
        {props.details.name}
      </h3>
      <p>{!isComplete && props.details.desc}</p>
      <Button onClick={() => props.removeTodo(props.index)} color={colors.red} type="remove">
        Remove Todo
      </Button>
    </li>
  );
};

Todo.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  details: PropTypes.shape({
    name: 'string',
    cat: 'string',
    desc: 'string',
    link: 'string',
    status: 'string',
  }).isRequired,
  index: PropTypes.string.isRequired,
};

export default Todo;
