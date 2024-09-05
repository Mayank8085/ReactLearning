import React, {useState,useContext} from 'react'

import {
    Form,
    FormGroup,
    Button,
    Input,
    InputGroup,
    InputGroupAddon,

} from 'reactstrap'

import {v4} from "uuid";

import {ToDoContext} from '../Context/ToDoContext';

import {ADD_TODO} from '../Context/action.types'

const ToDoForm=()=>{
    const [ToDoString, setToDoString] = useState("")
    const {dispatch} = useContext(ToDoContext);

    const handleSummit= e=>{ 
        e.preventDefault();
        if (ToDoString==="") {
            return alert("Please enter a TODO")
            
        }
        const todo={
            ToDoString,
            id:v4()

        }
        dispatch({
            type:ADD_TODO,
            payload: todo
        })
        setToDoString("")
    }

    return(
    <Form onSubmit={handleSummit}>
        <FormGroup>
            <InputGroup>
            <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next todo"
            value={ToDoString}
            onChange={e=>setToDoString(e.target.value)}
            
            />
            <InputGroupAddon addonType="prepend">
            <Button color="warning">
                ADD
            </Button>
            </InputGroupAddon>
            </InputGroup>
            
        </FormGroup>
    </Form>
    )

}

export default ToDoForm;