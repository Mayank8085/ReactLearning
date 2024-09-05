import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'
import User from './User'
import App from './App';
import Visit from './Visit';
import Notfound from './Notfound';


const routing=(

<Router>
  <div>
    <ul>
      <li> <Link to="/">home</Link> </li>
      <li> <Link to="/user"> User</Link> </li>
      <li> <Link to="/visit">Visit</Link> </li>

      
    </ul>
  </div>
  
<Switch>
<Route exact path="/" component={App}/>
  <Route  path="/user" component={User}/>
  <Route  path="/visit" component={Visit}/>
  <Route   component={Notfound}/>
</Switch>

  

</Router>)

 




ReactDOM.render(
  routing,
  document.getElementById('root')
);

