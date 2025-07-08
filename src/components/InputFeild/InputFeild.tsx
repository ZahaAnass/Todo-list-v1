import React, { useRef } from 'react'
import './InputFeild.css'

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props>= ({ todo, setTodo, handleAdd }) => {
  
    const inputRef = useRef<HTMLInputElement>(null)

    return (
      <form className='input' onSubmit={(e: React.FormEvent) => {
        handleAdd(e)
        inputRef.current?.blur(); 
      }}>
          <input type="text" placeholder='Enter a task' className='input__box' value={todo} onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => {
              setTodo(e.target.value);
            }
          } ref={inputRef}/>
          <button className='input__submit' type='submit'>Go</button>
      </form>
    )
}

export default InputFeild