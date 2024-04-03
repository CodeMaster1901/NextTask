import React, { useState } from "react";
import './App.css';

//importing components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

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
      />
      <ToDoList todos={todos}/>
    </div>
  );
}

export default App;
