import React from 'react';
import TodoItem from './TodoItem';
import PropType from 'prop-types';

function Todo({ todos, completeTodo, removeTodo }) {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

//PropType
Todo.propTypes = {
  todos: PropType.array.isRequired,
  completeTodo: PropType.func.isRequired,
  removeTodo: PropType.func.isRequired
}

export default Todo;
