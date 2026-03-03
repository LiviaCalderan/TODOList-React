import { useEffect, useState } from 'react'
import book from '../assets/book.svg';
import TodoItems from './TodoItems';

const Todo = () => {

  const [todoList, setTodoList] = useState(localStorage.getItem("toDoList") ?
   JSON.parse(localStorage.getItem("toDoList")) : []);
  const [inputValue, setInputValue] = useState('');

  const add = () => {
    if(inputValue.trim() === '') {
      return ;
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
    <div className='border-2 rounded-sm w-full max-w-sm border-[#3d3d3d]'>

      <div className='border-b-2 border-[#3d3d3d] px-3 py-2 flex items-center gap-2'>
        <img className='w-5 h-5' src={book} alt="Icon" />
        <h1 className='text-3xl font-extrabold text-[#5f9ea0] '>To-Do List:</h1>
      </div>

      <div>

        {todoList.length === 0 && (
          <p className="text-center text-gray-500 text-sm py-10 font-semibold ">Nenhuma tarefa adicionada!</p>
        )}

        {todoList.map((item) => {
            return <TodoItems 
            key={item.id} 
            id={item.id}
            text={item.text} 
            isCompleted={item.isCompleted} 
            deleteTodo={deleteItem} 
            toggleComplete={toggleComplete}
            />
        })}
      </div>

      <div className='flex items-center my-7 gap-3 p-3'>
        <input value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
        className='bg-white outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-gray-300 rounded-sm border-2 border-[#3d3d3d]' 
        type="text" 
        placeholder='Escreva uma Tarefa' />

        <button onClick={add} 
        className=' w-32 h-14 text-lg font-extrabold cursor-pointer rounded-sm border-solid border-2 border-[#3d3d3d] bg-[#5f9ea0] text-white'>
          ADD +
        </button>
      </div>
      
        
    </div>
  )
}

export default Todo