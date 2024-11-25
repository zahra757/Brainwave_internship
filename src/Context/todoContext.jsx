import React from "react";
import { createContext, } from "react";

export const TodoContext = createContext()

// wrap the todocontext provider tag in the main.jsx file outside the app file  
// to not use props we use todocontextprovider and pass children into it


export default function TodoContextProvider({ children }) {
    // here we give an empty array 
    const [todos, setTodos] = React.useState([])
    // and setcurrent todo to null
    const [currentTodo, setcurrentTodo] = React.useState(null)

    // edit todo
// here we set the todo value to the currentvalue in the field by passing param it can be any word 
    const SetTodoValue = (param) => {
        // yahan pe param ko print isliye kiya hai q k we need to see the id and the currenttodo that is stored in it and we got it from the map function that we used down 
        console.log(param)
        setcurrentTodo(param)
    
    }

    // to edit the todo
const EditTodo=(newtodo)=>{
    // check this to see the functionality
// console.log(newtodo)
// here we use the map function that if the item id = id of current todo then return a spread array
    setTodos(todos.map(item=>{
            if(item.id==currentTodo.id){
                return {...item , todo:newtodo}
            }
            return item
    }
    ))
}

    

// to delete the todos

    const DeleteTodo = (params) => {
        console.log(params)
        // todos.map((todo, i) => {
        //     if (i === params) {
        //         // console.log(todo)
        //         // console.log(todos.splice(params, 1)) 
        //         const newArray = [...todos.slice(0, params), ...todos.slice(params + 1)];
        //         setTodos(newArray)
        //         localStorage.setItem("todos", JSON.stringify(newArray))

        //     }
        // })

// set the todos in a localstorage
        setTodos(todos.filter(item => item.id != params.id))
        localStorage.setItem("todos", JSON.stringify(todos.filter(item => item.id != params.id)))



    }




    return (
// here we call the values rather than using props

        < TodoContext.Provider value={{ todos, setTodos, EditTodo, DeleteTodo, currentTodo, setcurrentTodo, SetTodoValue }}>

            {children
                // root file
            }


        </ TodoContext.Provider>

    )

}