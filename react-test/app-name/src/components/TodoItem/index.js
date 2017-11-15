import React from 'react';
import PropTypes from 'prop-types';
import Button from './../Button';

import './style.css';

const TodoItem = (props) => (
  <p className="todoItem">
    <div>
      <span>{props.number}. </span>
      <span>{props.name}</span>
    </div>
    <Button
      label='Delete'
      onClick={props.deleteTodoItem}
    />
  </p>
);

TodoItem.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  deleteTodoItem: PropTypes.func.isRequired,
}

export default TodoItem;