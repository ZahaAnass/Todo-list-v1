import React from 'react'
import { Todo } from '../../model';
import './TodoList.css'
import SingleTodo from '../SingleTodo/SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos}) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
      {
        (provided, snapshot) => (
        <div 
          className={`todos ${snapshot.isDraggingOver ? "dragActive" : ""}`}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <span className="todos__heading">
          Active Tasks
          </span>
          {
          todos.map((todo, index) => (
            <SingleTodo 
            index={index}
            todo={todo} 
            key={todo.id} 
            todos={todos} 
            setTodos={setTodos} 
            />
          ))
          }
          {provided.placeholder}
        </div>
        )
      }
      </Droppable>
      <Droppable droppableId="TodosCompleted">
      {
        (provided, snapshot) => (
        <div 
          className={`todos remove ${snapshot.isDraggingOver ? "dragComplete" : ""}`}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <span className="todos__heading">
          Completed Tasks
          </span>
          {
          completedTodos.map((todo, index) => (
            <SingleTodo 
            index={index}
            todo={todo} 
            key={todo.id} 
            todos={completedTodos} 
            setTodos={setCompletedTodos} 
            />
          ))
          }
          {provided.placeholder}
        </div>
        )
      }
      </Droppable>
    </div>
  )
}

export default TodoList