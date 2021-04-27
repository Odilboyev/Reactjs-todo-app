import React, {useEffect, useState} from 'react';
import './App.css';
import TodoList from './Todo List/TodoList';
import Context from './contex'
import AddTodo from "./Todo List/AddTodo.js";
import Loader from './Loader';
function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {

        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        },2000 )}
        
      )
  }, []);
  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }
  function removeTodo(id) {
    setTodos(
      todos.filter(todo =>  todo.id !== id)
    )
  }
  function addTodo(title){
    setTodos(todos.concat({
      title,
      id: Date.now(),
      completed: false
    }))
  }
  return (
    <Context.Provider value={{removeTodo}}>
    <div className="App">
      <h1>React.js todo app</h1>
      <AddTodo onCreate={addTodo}/>
      {loading && <Loader/>}
      {
      todos.length ?
      <TodoList todos={todos} onToggle={toggleTodo}/>
      : loading ? null : <p>:( hech vaqo yo'q</p> 
      }
      
    </div>
    </Context.Provider>
  );
}

export default App;
