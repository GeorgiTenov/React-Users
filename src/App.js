import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link,Switch,useParams,Redirect} from "react-router-dom";
import {useState,useEffect} from 'react';
import User from "./components/User";
import Users from "./components/Users";

import AddUser from "./components/AddUser";


function App() {
 

  return (
    <div>
      <Router>
        <Route path="/user/:id" exact><User></User></Route>
        <Route path="/" exact><Users></Users></Route>
        <Route path="/addUser"><AddUser></AddUser></Route>
      </Router>
    </div>
  );
    }

export default App;
