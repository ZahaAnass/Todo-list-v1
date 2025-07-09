import React from "react";
import InputFeild from "./components/InputFeild/InputFeild";
import { useState } from "react";
import { Todo } from "./model";
import TodoList from "./components/TodoList/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import "./App.css";

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, todo: "Learn TypeScript", isDone: false },
    { id: 2, todo: "Build React App", isDone: true },
    { id: 3, todo: "Write Unit Tests", isDone: false },
    { id: 4, todo: "Deploy to Production", isDone: false }
  ]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  }

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }
    
    let add: Todo;
    let active = todos;
    let completed = completedTodos;

    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = completed[source.index];
      completed.splice(source.index, 1);
    }

    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      completed.splice(destination.index, 0, add);
    }

    setCompletedTodos(completed);
    setTodos(active);
    
  }
  
  return(
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd = {handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos} setCompletedTodos={setCompletedTodos}
          completedTodos={completedTodos} />
      </div>
    </DragDropContext>
  )
}

export default App;