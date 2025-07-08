import React, { useEffect } from 'react';
import { Todo } from '../../model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SingleTodo.css';
import { faPen, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {

    const [edit, setEdit] = React.useState<boolean>(false);
    const [editTodo, setEditTodo] = React.useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => 
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        ));
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => 
            todo.id === id ? { ...todo, todo: editTodo } : todo
        ));
        setEdit(false);
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [edit]);

    const inputRef = React.useRef<HTMLInputElement>(null);

    return (
        <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
            {
                edit ? (
                    <input 
                        ref={inputRef}
                        value={editTodo} 
                        onChange={(e) => setEditTodo(e.target.value)} 
                        className="todos__single--text" 
                    />
                ):todo.isDone ? (
                    <s className="todos__single--text">{todo.todo}</s>
                ):(
                    <span className="todos__single--text">{todo.todo}</span>
                )
            }
            <div>
                <span className="icon" onClick={() => {
                    if(!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }}>
                    <FontAwesomeIcon icon={faPen} />
                </span>
                <span className="icon" onClick={() => {handleDelete(todo.id)}}>
                    <FontAwesomeIcon icon={faTrash}/>
                </span>
                <span className="icon" onClick={() => {handleDone(todo.id)}}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
            </div>
        </form>
    );
};

export default SingleTodo;