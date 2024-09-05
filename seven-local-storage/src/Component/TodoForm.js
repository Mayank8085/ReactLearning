import React,{useState} from 'react'
 import {
     FormGroup,
     Input,
     InputGroup,
     InputGroupAddon,
     Button,
     Form,
     Container
 } from 'reactstrap'

 import {v4} from 'uuid'

const TodoFrom =({addTodos})=>{
    const [todoString, setTodoString] = useState("")
    
    const handleSummit= e =>{
        e.preventDefault()
        if (todoString === "") {
            return alert("Please fill todo")
            
        }
        const todo ={
            todoString,
            id :v4()
        }

        addTodos(todo) 

        setTodoString("")
    }

    return(
        <Form onSubmit={handleSummit}>
            <FormGroup>
                <InputGroup>
                <Input
                type="text"
                name="todo"
                id="todo"
                placeholder="Add your todo"
                value ={todoString}
                onChange={e=>setTodoString(e.target.value)}
                />
                <InputGroupAddon addonType="prepend">
                    <Button
                    color="success"

                    >
                        Add ToDo

                    </Button>
                </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )

}

export default TodoFrom