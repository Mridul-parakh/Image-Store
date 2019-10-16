import React, { Component } from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../actions/authActions';



class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
    render() {
      const {isAuthenticated}=this.props.auth;
      const authLinks=(
        <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                <li className="active"><a href="/dashboard">Dashboard</a></li>
                
                <li><a href="/selected">Favourite</a></li>
           <li><a href="/" onClick={this.onLogoutClick.bind(this)}>Logout</a></li>
        </ul>
      )
      const guestLinks=(
       
        <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
        <li className="active"><a href="/">Home</a></li>
        
      
           <li><a href="/login">Login</a></li>
           <li><a href="/register">Register</a></li>
        </ul>
       
       
      )
        return (
            <div>
                 <div className="site-mobile-menu">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body"></div>
    </div>
    

    <header className="site-navbar py-3" role="banner">
      
      


      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-6 col-xl-2">
            <h1 className="mb-0">
            
              <a href="index.html" className="text-black h2 mb-0">Qillhash<span className="text-primary">.</span></a></h1>
          </div>
          <div className="col-10 col-md-8 d-none d-xl-block">
            <nav className="site-navigation position-relative text-right text-lg-center" role="navigation">

              
             
                {isAuthenticated?authLinks:guestLinks}
              
             
            </nav>
          </div>

          <div className="col-6 col-xl-2 text-right">
            <div className="d-none d-xl-inline-block">
              <ul className="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0" data-class="social">
                <li>
                  <a href="/" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                </li>
                <li>
                  <a href="/" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                </li>
                <li>
                  <a href="/" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                </li>
                <li>
                  <a href="/" className="pl-3 pr-3"><span className="icon-youtube-play"></span></a>
                </li>
              </ul>
            </div>

            <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{position:"relative", top: "3px"}}><a href="/" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>

          </div>

        </div>
      </div>
      
    </header>
            </div>
        )
    }
}

Navbar.propTypes={
  logoutUser:propTypes.func.isRequired,
  auth:propTypes.object.isRequired
 
}
const mapStateToProps=(state)=>({
 auth:state.auth
});


export default connect(mapStateToProps,{logoutUser})(Navbar);