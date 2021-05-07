//programmer : Dana Shafiei
import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import Profile from "./Profile";
import ToDoList from "./ToDoList";


function App() {



//Here we have defined all the routes and our main route is the Login page
  return (<Router>
          <div className="App">

              <div className="outer">
                  <div className="inner">
                      <Switch>
                          <Route exact path='/' component={Login}/>
                          <Route path="/sign-in" component={Login}/>
                          <Route path="/sign-up" component={SignUp}/>
                          <Route path="/Home" component={Home}/>
                          <Route path="/Profile" component={Profile}/>
                          <Route path="/toDoList" component={ToDoList}/>
                      </Switch>
                  </div>
              </div>



          </div>

  </Router>

  );
}

export default App;
