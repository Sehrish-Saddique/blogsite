import React from 'react'
import './App.css'
import {Route,Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog' 
  const App = () => {
  return(
    <div className="container"> 
    
     <Switch>
    
     <Route path="/" exact  component={Home} />
     <Route path='/blog/:ID'  component={Blog} />
     <Redirect to='/' />
     </Switch>
    </div>
  
)}; 
export default App;
