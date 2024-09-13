import React, { useEffect, useRef, useState } from 'react'
import TodoItems from './TodoItems'

const Todo = () => {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")):[]);
  const inputRef = useRef();
  const add= () =>{
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    }
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  }
  const deleteTodo = (id) =>{
    setTodoList((prevTodos) =>{
      return prevTodos.filter((todo) => todo.id !== id)
    })
  }
  const toggle = (id) =>{
    setTodoList((preTodos) =>{
      return preTodos.map((todo) =>{
        if (todo.id === id) {
          return {...todo, isComplete: !todo.isComplete}
        }
        return todo;
      })
    })
  }

  useEffect (() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  },[todoList])
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
       <div className="flex item-center mt-7 gap-2">
        <i class="fas fa-regular fa-calendar-plus w-8 text-3xl"></i>
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
       </div>
       <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input type="text" ref={inputRef} name="" id="" placeholder='Add your task' className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600 text-xl'/>
        <button onClick={add} className='border-none rounded-full bg-orange-600 w-20 h-14 text-white text-lg font-medium cursor-pointer'><i class="fas fa-regular fa-square-plus text-2xl"></i></button>
       </div>
       <div>
        {todoList.map((item, index) => {
          return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo= {deleteTodo} toggle={toggle}/>
        })}
       </div>
    </div>
  )
}

export default Todo
