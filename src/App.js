import React, { useState, useEffect } from 'react';
import AddTodo from './component/AddTodo';
import Todo from './component/Todo';
import About from './component/About';
import Header from './component/Header';
import './css/App.css';
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios';
import * as uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => setTodos(res.data));
  }, []);

  const addTodo = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res => {
        res.data.id = uuid.v4();
        setTodos([...todos, res.data]);
      });
  };

  const completeTodo = id => {
    setTodos([
      ...todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    ]);
  };

  const removeTodo = id => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        setTodos([
          ...todos.filter(todo => {
            return todo.id !== id;
          })
        ]);
      });
  };

  return (
    <Router>
      <div>
        <Header />
        <Route
          exact
          path='/'
          render={() => (
            <React.Fragment>
              <AddTodo addTodo={addTodo} />
              <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            </React.Fragment>
          )}
        />
        <Route path='/about' component={About} />
      </div>
    </Router>
  );
}

export default App;
