//  we create 3 todos files in a todo folder and first we write in todo/index file then in todos and then in todo list
// for creating a to do list we first write out function code in app.jsx file and link the props
// then to not use props we create a context folder where we input the hook of context
// then we link the context file to the main.jsx file to make it work

import React from 'react'
import Todo from './Todo/Index'
import { useContext } from 'react'
import { TodoContext } from './Context/todoContext' 
import { Toaster } from 'react-hot-toast'


export default function App() {


  


  return (
    <div>
{/* <h3>todo list</h3> */}

{/* here we use context instead of props */}

      <Todo/>

      <Toaster/>
      
    </div>
  )
}

