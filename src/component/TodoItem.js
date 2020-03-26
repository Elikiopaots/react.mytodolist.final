import React from 'react';
import PropType from 'prop-types';

function TodoItem({ todo, completeTodo, removeTodo }) {
  const getStyle = {
    textDecoration: todo.completed ? 'line-through' : '',
    background: 'linear-gradient(to right, #eee, #f4f4f4, #ddd, #f4f4f4)',
    padding: '10px',
    borderBottom: '1px #ccc dotted'
  };

  return (
    <div style={getStyle}>
      <i
        className={
          todo.completed ? 'fa fa-check-square-o fa-lg' : 'fa fa-square-o fa-lg'
        }
        style={{ marginTop: '3px' }}
        onClick={() => completeTodo(todo.id)}
      />
      {'   '}
      {todo.title}
      <i
        className='btnStyle fa fa-trash-o fa-lg'
        onClick={() => removeTodo(todo.id)}
      />
    </div>
  );
}

//PropType
TodoItem.propTypes = {
  todo: PropType.object.isRequired,
  completeTodo: PropType.func.isRequired,
  removeTodo: PropType.func.isRequired
};

export default TodoItem;
