import React, { useState,useEffect } from "react";
import './App.css';

//importing components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";


function App() {
  //states inforamtion
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
    // run only once when app starts
    useEffect(() => {
      getLocalTodos();
    } , []); 

    //use effect
    useEffect(() => {
      filterHandler();
      saveLocalTodos();
    } , [todos,status]); 

  //functions and events
  const filterHandler = () =>{
    switch(status){
      case 'completed' : 
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted' : 
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // save to local storage
  const saveLocalTodos = () => {
      localStorage.setItem('todos' , JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos' , JSON.stringify([]));
    }
    else{
      let todoLocalStore = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocalStore)
    }
  };
  return (
    <div className="App">
      <header>
        <h1> NextTask </h1>
      </header>
      <Form  
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
      />
      <ToDoList setTodos={setTodos} todos={todos} filteredTodos = {filteredTodos}/>
    </div>
  );
}

export default App;
