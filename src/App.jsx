import { useState } from 'react'
import './App.css'
import Addtask from './Components/Addtask'
import { Provider } from 'react-redux'
import { store } from './str/Store'
import Todolist from './Components/Todolist'

function App() {

  return (
    <Provider store={store}>
     <Addtask/>
     <Todolist/>
    </Provider>
  )
}

export default App
