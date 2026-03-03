import React from 'react'
import check from '../assets/check.svg';
import uncheck from '../assets/uncheck.svg';    
import trash from '../assets/trash.svg';


const TodoItems = ({text, id, isCompleted, deleteTodo, toggleComplete}) => {
  return (
    <div className='flex items-center my-3 gap-2 border-b-2 border-[#3d3d3d] px-3 pb-2'>

        <div onClick={() => toggleComplete(id)} className='w-8 flex flex-1 items-center cursor-pointer'>
            <img className='w-7' src={isCompleted ? check : uncheck} alt="check icon" />
            <p className={`ml-4 text-[17px] font-semibold ${isCompleted ? "line-through text-gray-400" : "text-[#5f9ea0]"}`}>
                {text}
            </p>
        </div>

        <img onClick={() => deleteTodo(id)} className='w-6 cursor-pointer' src={trash} alt="trash icon" />
    </div>
  )
}

export default TodoItems