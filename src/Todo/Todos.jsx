import React from 'react'
import TodoList from './TodoList'
import { useContext } from 'react'
import { TodoContext } from '../Context/todoContext'
export default function Todos() {
    // here we create a function and pass todos in it and set the context to todocontext to map it with the todocontext

    // step 8
    const {todos}=useContext(TodoContext)
    // console.log(todos)
    return (
        <div>
         

            <div>

            {/* we use mapping function here to bring the current object into the todolist */}
             {/* we use mapping function here to bring the current object into the index file */}
                    {/* we can give any name to the map function:here currentobject is the name of the map function */}

                {
                    todos.map((currentObject, index) => {

                        // we have to pass index here to get the index first and then it can be deleted
                        // we dont need to work with index if we use id
                        return <TodoList key={currentObject.todo} index={index}  currentObject={currentObject}  />
                    })
                }
            </div>
        </div>
    )
}