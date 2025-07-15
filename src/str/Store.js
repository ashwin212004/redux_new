import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './TodosSlice'

export const store=configureStore({
    reducer:todoReducer
})