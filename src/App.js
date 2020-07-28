import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Topbar from './components/Topbar'
import Register from './components/Register'
import List from './components/List'

import './App.css';

function App() {
  return (
    <>      
      <BrowserRouter>
        <Topbar />                
        
        <div className="container">
        <Switch>
          <Route exact path="/">            
          </Route>
          <Route path="/create">
            <Register />
          </Route>
          <Route path="/list">
            <List />
          </Route>
        </Switch>
        </div>

      </BrowserRouter>
    </>
    
  );
}

export default App;
