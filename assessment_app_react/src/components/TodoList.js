import React, { useContext } from 'react'
import TodosContext from '../context'
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";




export default function TodoList(){
    const { state, dispatch } = useContext(TodosContext)
    const title = state.todos.length > 0 ? `${state.todos.length} Todos` : "Não há tarefas novas!"

    return (
        <div className= "container mx-auto max-w-md text-center font-mono">
            <h1 className="text-bold m-5 blue-grey lighten-3 text-uppercase">{title}</h1>

            <ul>
                { state.todos.map(todo => (
                    <li key={todo.id} className="flex border-bottom border-dark border=2 my-2 py-4">
                        <span 
                        onDoubleClick= {() => dispatch({ type: "TOGGLE_TODO", payload: todo})}
                        className={ `flex-1 ml-12 cursor-pointer ${todo.complete && "line-through text-grey-darkest"}`}
                        >{todo.text}</span>
                        <button className="p-2"
                            onClick= {() => dispatch ({ type: "SET_CURRENT_TODO", payload: todo})}
                        >
                            <p> <FaEdit /></p>
                        </button> 
                        <button className="p-2"
                            onClick= {() => dispatch ({ type: "REMOVE_TODO", payload: todo})}
                        >
                        <p> <FaTrashAlt /></p>
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    )

}