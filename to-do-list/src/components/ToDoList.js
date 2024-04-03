import React from 'react';
//import the components
import Todo from "./ToDo";

const ToDoList = ({todos}) => {


    return (
        <div className = "todo-container">
            <ul className = "todo-list">
                {todos.map(todo => (
                    <Todo text={todo.text}/>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;