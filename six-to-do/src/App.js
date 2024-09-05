import React, {useReducer} from 'react';
import {Container} from 'reactstrap'

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import {ToDoContext} from './Context/ToDoContext'
import todoReducer from './Context/reducer'
import ToDoForm from './Components/TodoForm'
import ToDos from './Components/ToDos';

const App=()=>{
  const [todos,dispatch]=useReducer(todoReducer,[])
  return(
    <ToDoContext.Provider value={{todos,dispatch}}>
      <Container fluid>
        <h1>ToDo APP Using Context API</h1>
        <ToDos/>
        <ToDoForm/>

      </Container>
    </ToDoContext.Provider>
  )
}



export default App;
