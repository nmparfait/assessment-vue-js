import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import TodosContext from './context';
import TodosReducer from './reducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  const initialState = useContext(TodosContext)
  const [state, dispatch] = useReducer (TodosReducer, initialState)

  return (
    <TodosContext.Provider value= {{ state, dispatch}}>
      <TodoForm/>
      <TodoList/>
    </TodosContext.Provider>
  )
}

ReactDOM.render(
  <App />
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

