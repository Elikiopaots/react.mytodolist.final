import React, { useState } from 'react';
import PropType from 'prop-types';

function AddTodo({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title) return;
    addTodo(title);
    setTitle('');
  };

  return (
    <form className='submit' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add Todos...'
        value={title}
        className='addTodo'
        onChange={e => setTitle(e.target.value)}
      />
      <input type='submit' value='Submit' className='btn' />
    </form>
  );
}

//PropType
AddTodo.propTypes = {
  addTodo: PropType.func.isRequired
};

export default AddTodo;
