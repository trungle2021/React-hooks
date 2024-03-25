import React from "react";
import PropTypes from "prop-types";

const TodoList = (props) => {
  const { todos, onToDoClick } = props;

  function handleOnToDoClick(todo) {
    if (onToDoClick) {
      onToDoClick(todo);
    }
  }

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id} onClick={() => handleOnToDoClick(todo)}>
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  onToDoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onToDoClick: null,
};

export default TodoList;
