import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import ClassComponent from './ClassComponent'
import FunctionComponent from './FunctionComponent';
import CustomButton from './CustomButton';
import ScoreBoard from './ScoreBoard';
import Home from './comp/Home';
import About from './comp/About';
import Forms from './comp/Forms';
import Notes from './comp/Notes';
import Users from './comp/Users';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
        
    }
}
  
  render(){
    return (
      <div className="App">
        <Router>
          <Nav>
            <Nav.Item>
              <Nav.Link><Link to="">Home </Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to="/about"> About </Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to="/forms"> Forms</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to="/notes">Notes</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to="/users">Users</Link></Nav.Link>
            </Nav.Item>
          </Nav>

          <Routes>
            <Route path="" Component={Home}/>
            <Route path="/about" Component={About}/>
            <Route path="/forms" Component={Forms}/>
            <Route path="/notes" Component={Notes}/>
            <Route path="/users" Component={Users}/>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
