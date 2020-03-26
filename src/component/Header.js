import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='headerStyle'>
      <h1>TodoList</h1>
      <NavLink className='linke' activeClassName={'active'} exact to='/'>
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink className='linke' activeClassName={'active'} to='/about'>
        About
      </NavLink>
    </header>
  );
}

export default Header;
