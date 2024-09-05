import React,{useContext} from 'react'

import {ListGroup,ListGroupItem} from 'reactstrap'

import {FaCheckDouble} from 'react-icons/fa'


import {REMOVE_TODO} from '../Context/action.types'
import { ToDoContext } from '../Context/ToDoContext'


const ToDos=()=>{

    const {todos,dispatch}=useContext(ToDoContext)

    return(
        <ListGroup className="mt-5 m-2 items">
            {todos.map(todo =>(
                <ListGroupItem key={todo.id}>
                    {todo.ToDoString}
                    <span className="float-right"
                    onClick={()=>{
                        dispatch({
                            type :REMOVE_TODO,
                            payload :todo.id
                        })
                    }}> <FaCheckDouble/></span>

                </ListGroupItem>
            ))}

        </ListGroup>
    )


}

export default ToDos 