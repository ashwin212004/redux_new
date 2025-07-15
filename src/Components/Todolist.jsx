import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../str/TodosSlice'


function Todolist() {
    const todos = useSelector(state => state.todos)
    const [editId, setEditId] = useState(null)
    const [editText, setEditText] = useState('')
    const dispatch = useDispatch()
    const handleEdit=(todo)=>{
        setEditId(todo.id)
        setEditText(todo.todomsg)

    }
    const handleSave=()=>{
        dispatch(updateTodo({id:editId,todomsg:editText}))
        setEditId(null)
        setEditText('')
    }
    return (
        <>
            <ul className="list-none"></ul>
            {todos.map((todo) => (
                <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                    key={todo.id}>
                    {editId === todo.id ? (
                        <input
                            type='text'
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="text-black px-2 py-1 rounded w-full mr-4" />
                    ) : (
                        <div className="text-white flex-1 mr-4">{todo.todomsg}</div>
                    )}
                    <div className="flex gap-2">
                        {editId == todo.id ? (
                            <button
                                onClick={handleSave}
                                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded">
                                Save
                            </button>
                        ) : (<button
                            onClick={() => handleEdit(todo)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                        >
                            Edit
                        </button>)}
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                        >
                            Delete
                        </button>
                    </div>

                </li>
            ))}
        </>
    )
}

export default Todolist