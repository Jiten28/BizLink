import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  return (
    <div className='flex h-screen justify-center items-center bg-black '>
      <h3 className='text-white'>Number is {num}</h3>
      <button className='ml-4 px-4 py-2 bg-blue-500 text-white rounded' onClick={() => setNum(num + 1)}>
        Increment 
        </button>
      <button className='ml-4 px-4 py-2 bg-red-500 text-white rounded' onClick={() => setNum(num - 1)}>
        Decrement
      </button>
      <button className='ml-4 px-4 py-2 bg-green-500 text-white rounded' onClick={() => setNum(0)}>
        Reset
      </button>
      <button className='ml-4 px-4 py-2 bg-yellow-500 text-white rounded' onClick={() => setNum(num * 2)}>
        Double
      </button>
      <button className='ml-4 px-4 py-2 bg-purple-500 text-white rounded' onClick={() => setNum(num / 2)}>
        Halve 
      </button> 
    </div>
  )
}

export default App