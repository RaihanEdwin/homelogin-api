import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Login from "./components/login.component";
import SignUp from "./components/signup.component";
;

function App() {
  return (<Router>
    <div className="App">     
          <Switch>
            <Route exact path='/' component={SignUp} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            
          </Switch>
    </div></Router>
  );
}

export default App;
