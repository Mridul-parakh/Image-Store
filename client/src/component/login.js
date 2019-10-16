import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import propTypes from 'prop-types';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {loginUser} from '../actions/authActions';

class login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',     
            errors:{}
        }
    }
    changeHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    submitHandler=(event)=>{
        event.preventDefault();
        const userData={
            email:this.state.email,
            password:this.state.password           
        }
        this.props.loginUser(userData);
    }
    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard');
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.error);
        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/dashboard');
        }
        if(nextProps.error){
            this.setState({errors:nextProps.error});
        }
    }
    render() {
        const errors = this.state.errors;
        return (
            <div>
                 <div className="site-section" data-aos="fade">
    <div className="container-fluid">
      
      <div className="row justify-content-center">
        <div className="col-md-7">
          

          <div className="row">
            <div className="col-lg-8 mb-5">
              <form action="/login" noValidate onSubmit={this.submitHandler}>
               

               

                <div className="row form-group">
                  
                  <div className="col-md-12">
                    <label className="text-black" for="email">Email</label> 
                    <input type="email" className={classnames('form-control form-control-lg', { 'is-invalid': errors.email })}
                                        placeholder="Email Address" name="email"
                                        value={this.state.email}
                                        onChange={(event) => this.changeHandler(event)} />
                                    {errors.email && (
                                        <div className="invalid-feedback">{errors.email}</div>
                                    )}
                  </div>
                </div>

                <div className="row form-group">
                  
                  <div className="col-md-12">
                    <label className="text-black" for="password">Password</label> 
                    <input type="password" className={classnames('form-control form-control-lg', { 'is-invalid': errors.password })}
                                        placeholder="Password" name="password"
                                        value={this.state.password}
                                        onChange={(event) => this.changeHandler(event)} />
                                    {errors.password && (
                                        <div className="invalid-feedback">{errors.password}</div>
                                    )}
                  </div>
                </div>

               

                <div className="row form-group">
                  <div className="col-md-12">
                  <input type="submit" className="btn btn-success btn-block mt-4" />
                  </div>
                </div>

    <b><a href="/register">New User/SignUp</a></b>
              </form>
            </div>
       
          </div>
        </div>
    
      </div>
    </div>
  </div>
            </div>
        )
    }
}

login.propTypes={
    loginUser:propTypes.func.isRequired,
    auth:propTypes.object.isRequired,
    error:propTypes.object.isRequired
}
const mapStateToProps=(state)=>({
   auth:state.auth,
   error:state.error
});


export default connect(mapStateToProps,{loginUser})(withRouter(login));