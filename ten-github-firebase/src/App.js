import React, { useState } from 'react';



import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css";

//firebase
import firebase from 'firebase/app'
import "firebase/auth"

//components
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import PageNotFound from "./pages/PageNotFound"
import Footer from './layout/Footer'
import { UserContext } from './context/UserContext';
import Header from './layout/Header';
import firebaseConfig from "./Config/firebaseConfig"
//init firebase

firebase.initializeApp(firebaseConfig)

//hello

const App=()=> {

  const [user, setUser] = useState(null)
  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value={{user,setUser}}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/signin" component={Signin}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="*" component={PageNotFound}></Route>
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
