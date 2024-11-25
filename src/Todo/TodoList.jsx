import React, { useEffect, useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { useContext } from 'react'
import { TodoContext } from '../Context/todoContext'
import toast from 'react-hot-toast'
// here we use todolist becuase we want to get the data into this file so we use props within the home component
export default function TodoList({ currentObject, index }) {
  const {DeleteTodo,EditTodo,SetTodoValue}=useContext(TodoContext)

  const [fade, setFade]=useState(false)

  useEffect(()=>{
    setFade(true)
  },[])
  return (
    <div className={`text-left text-white flex bg-slate-950 h-full w-full p-[1rem] ${fade ? 'opacity-100 transform scale-100 transition-all duration-500': 'opacity-0 transform scale-95'}`}>


      <p>

        {
          currentObject.todo
        }
      </p>


      
      <span className='flex ml-[5rem]'>

       {/* edit button */}
       {/* here when we click on the edit button it will set the value in a variable and get it in the input field */}
       <FiEdit className='text-red-600 text-xl' onClick={()=>{
    SetTodoValue(currentObject)
    
}} />
        

        {/* to delete the todo */}
        <MdDelete className='text-red-600 text-xl'   onClick={()=>
        {
        DeleteTodo(currentObject)
        toast.success('Todo Removed')
        }
        } 
        // style={{color:'red',fontSize:'1.3rem' }} 
        />
      </span>
    </div>
  )
}