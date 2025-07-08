import React from "react";
import InputFeild from "./components/InputFeild/InputFeild";
import { useState } from "react";
import { Todo } from "./model";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, todo: "Learn TypeScript", isDone: false },
    { id: 2, todo: "Build React App", isDone: true },
    { id: 3, todo: "Write Unit Tests", isDone: false },
    { id: 4, todo: "Deploy to Production", isDone: false }
  ]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  }

  return(
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd = {handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App;