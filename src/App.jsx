import React from 'react'
import Todo from './components/Todo'

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen text-[#3d3d3d]' style={{
        backgroundColor: '#fefef9',
        backgroundImage: 'radial-gradient(circle, #c8c8b8 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}>
        <Todo />
    </div>
  )
}

export default App