import React from 'react'
import './App.css'
import {Route,Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog' 
import Application from './components/Api/application'
import Viewusers from './components/Api/viewusers'
   const App = () => {
  return(
    <div className="container"> 
   
     <Switch>
    
     <Route path="/" exact  component={Home} />
     <Route path='/blog/:ID'  component={Blog} />
     <Route path='/viewusers'  component={Viewusers} />
     
     <Redirect to='/' />
     </Switch>
     <Application/>
    </div>
  
)}; 
export default App;
