import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../str/TodosSlice'

function Addtask() {
    const [input, setinput] = useState('')
    const dispatch = useDispatch()
    const handlesubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setinput('')

    }
    return (
        <form onSubmit={handlesubmit}>
            <input
                className="bg-gray-800 rounded border
     border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none
      text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                type='text'
                value={input}
                onChange={(e) => setinput(e.target.value)} />
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" type='submit'>Add</button>
        </form>
    )
}

export default Addtask