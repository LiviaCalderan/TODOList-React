import { useEffect, useState } from 'react'
import book from '../assets/book.svg';
import TodoItems from './TodoItems';

const Todo = () => {

  const [todoList, setTodoList] = useState(localStorage.getItem("toDoList") ?
   JSON.parse(localStorage.getItem("toDoList")) : []);
  const [inputValue, setInputValue] = useState('');

  const add = () => {
    if(inputValue === '') {
      return;
  }
    const inputText = inputValue.trim();
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isCompleted: false
    }
    setTodoList((prev) => [...prev, newTodo]);
    setInputValue('');
  }

  const deleteItem = (id) => {
    return setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {...todo, isCompleted: !todo.isCompleted};
        }
        return todo;
      })
    }) 
  }

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(todoList));
  }, [todoList])

  return (
    <div className='bg-transparent w-11/12 max-w-md flex flex-col p-7 
    min-h-137.5 border-solid border-3 border-[#3d3d3d] rounded-2xl'>

      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={book} alt="Icon" />
        <h1 className='text-3xl font-semibold '>My To-Do List:</h1>
      </div>

      <div className='flex items-center my-7 rounded-full  bg-blue-100'>
        <input value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
        className='bg-transparent outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-50' 
        type="text" 
        placeholder='Add your Task' />
        <button onClick={add} 
        className=' w-32 h-14 text-lg font-medium cursor-pointer rounded-full border-solid border-2 border-[#3d3d3d] bg-transparent'>
          ADD +
        </button>
      </div>

      <div>
        {todoList.map((item) => {
            return <TodoItems key={item.id} 
            text={item.text} 
            isCompleted={item.isCompleted} 
            deleteTodo={deleteItem} 
            toggleComplete={toggleComplete}
            id={item.id}
            />
        })}
      </div>
        
    </div>
  )
}

export default Todo