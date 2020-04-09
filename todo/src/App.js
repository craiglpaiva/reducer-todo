import React, { useState, useReducer } from 'react';
import { reducerState, initialState } from './reducers/reducer';
import List from './components/List';
import './App.css';

function App() {
  const [item, dispatch] = useReducer(reducerState, initialState);
  const [newTask, setTask] = useState('');

  const handleChanges = e => {
    setTask(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    setTask('')
  }

  return (
    <div className="App">
      <h1>TODO List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="iten" value={newTask} onChange={handleChanges} placeholder="Task" />
        <br></br>
        <button onClick={() => dispatch({ type: 'ADD_TASK', payload: newTask })} type='submit'>Add Task</button>
        <List item={item} dispatch={dispatch} />
        <button onClick={() => dispatch({ type: 'CLEAR', payload: newTask })}>Clear Task</button>
      </form>
    </div>
  );
}

export default App;
