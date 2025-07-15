import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos: [
        {
            id: 1,
            todomsg: "hello world"
        }
    ]
}
export const TodosSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                todomsg: action.payload
            }
            state.todos.push(todo)

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)

        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id == action.payload.id ? { ...todo, todomsg: action.payload.todomsg } : todo)
        }

    }
}
)
export const{addTodo,removeTodo,updateTodo}=TodosSlice.actions
export default TodosSlice.reducer
