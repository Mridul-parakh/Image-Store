import React from 'react';
import Navbar from './layout/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './layout/Dashboard';
import Dashboard1 from './layout/Dashboard1';
import Selected from './layout/Selected';
import Footer from './layout/Footer';
import PrivateRoute from './component/comman/privateRoute';
import Register from './component/register';
import Login from './component/login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="site-wrap">
      <Navbar/>
      <Route exact path="/" component={Dashboard}/>
      <PrivateRoute exact path="/dashboard" component={Dashboard1}/>
      <PrivateRoute exact path="/selected" component={Selected}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/>
      <Footer/>
      </div>
    </Router>
      
  
  );
}

export default App;
