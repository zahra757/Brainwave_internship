import React from 'react'
// import Home from './Home/Home'
import Todos from './Todos'
import { useContext } from 'react'
import { TodoContext } from '../Context/todoContext'
import toast from 'react-hot-toast'
import { uid } from 'uid'
// install autoimport extension to import the file automatically
export default function Index() {
  //single todo to be added


  // const { todos, setTodos } = useContext(TodoContext)

  //create a state of todo for a single todo by using todos and settodos at first
  const { todos, setTodos, currentTodo, EditTodo } = useContext(TodoContext)
  // here we make this state to edit the function that if the currenttodo is= to todo then return todo otherwise return null value

  //group of todo
  //array of added todos:here array is used coz we have a list of todos so we use array


  // const [todos, setTodos] = React.useState([])

  // we use this to settodos to current todo so that we can edit and delete it
  const [todo, setTodo] = React.useState(currentTodo?.todo && '')






// adding todo


  const addTodo = () => {
    
    // settodos displays the input on the page 
    // in the settodos we firstly use spread operator coz it is an array , we open the array and add comma, then we create an object of todo:todo
    // the todo in darkblue is a variable

    // here we get the todo by the random id
    setTodos([...todos, { todo: todo, id: uid() }])

    // localStorage.setItem('todos', [...todos, { todo: todo }])

    // console.log([...todos, { todo: todo }])

    // here we convert the todos array into string
    let stringTodos = JSON.stringify([...todos, { todo: todo, id: uid() }])
    // console.log(stringTodos)
    // here i set it into localstorage so that it doesnt go away if i refresh it
    localStorage.setItem('todos', stringTodos)

    // tis is used to empty the state of settodo:each time an input is entered and pushed into the todo list the input field becomes empty

    // step 6
    setTodo('')
    toast.success('Todo added`')


  }
  const clearLocalStorage = () => {
    localStorage.clear()
    setTodos([])
  }


// to store the todos in a local storage we first have to convert it into a string 
  React.useEffect(() => {
// here i set the todo into the local storage
    let value = localStorage.getItem('todos') && JSON.parse(localStorage.getItem('todos'))
    // here i pass an if condition to settodos that if the value exists then print value otherwise return an empty array
    setTodos(value ? value : [])


  }, [])



  // to edit todo
  React.useEffect(()=>{
    // here we use question mark as an if condition
    setTodo(currentTodo?.todo)
  },[currentTodo])



  return (
    // we give styling to the div in curly brackets and the styling will only apply on the div and not the whole page

    // main div
    <div 
    // style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}
    className='flex flex-col justify-center items-center bg-gray-700 p-8 w-full h-screen shadow-lg '
    >
      <h2 className="text-white text-3xl mb-4">Todo</h2>

      <div className=" mb-4">

        {/* here we use value to make the input field empty after every input */}
        {/* onchange is used to bring the settodovalue in array */}

        {/* step 1  */}
        <input placeholder='add todo' className="w-full p-3 rounded-lg text-black text-xl focus:outline-none" value={todo} type='text' onChange={(e) => setTodo(e.target.value)} />

        {/* here we use addtodo event on button to add the input into the interface */}


{/* edit todo button */}
{/* to write logic for the edit button first create a button in index file then in the todolist set the todovalue in the input field then in the todocontext set the todo value to the params and create a function of edittodo in which use map function that if the id of the currenttodo matches with the item id in the input field then execute it  */}
{/*currentTodo? this means that if currenttodo exists then edit button will be displayed  */}
{/* agar i want to have only add todo button then i will remove the entire edit functionality */}


 {/* <button className='submit' onClick={()=>addTodo()}>add todo</button> */}

{/* editing button  */}
 {currentTodo?<button  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors" onClick={()=>EditTodo(todo)}edit todo>edit todo</button>:
  <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors" onClick={()=>addTodo()}>add todo</button>}
        


      </div>
      {/* these are props that we use to get and set the todolist and we will use props in the todo file */}
      <Todos />

{/* to clear the local storage */}
      <button className="mt-4 w-[10rem] bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors" onClick={()=>clearLocalStorage()}>Clear todo</button>
    </div>




  )
}

