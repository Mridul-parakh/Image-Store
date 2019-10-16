import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../Spinner/spinner';
import {withRouter} from 'react-router-dom';
import propTypes from 'prop-types';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {imageStore} from '../actions/imageAction';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            path:[],
            loading:true,
            image:"",
            errors:{}
        }
  
    }
    componentDidMount(){
        axios.get('https://api.unsplash.com/photos/?client_id=2c0a37d7e38c0074459e65b7a81d0f7b51ae900726f862ed7bcfe64d41246091')
        .then(data=>{
            const datas=data.data.map(data=>{
                return data;
            })
            this.setState({path:datas,loading:false});
        })
    }

   submitHandler(path) {
   
    // this.setState({image:"ddd"});
    // console.log(this.state.image);
    const newImage={};
    newImage.path=path;
        this.props.imageStore(newImage);
      
     
    }

  
 
  componentWillReceiveProps(nextProps){
      
      if(nextProps.error){
        alert(nextProps.error.error);
          this.setState({errors:nextProps.error});
      }
  }
  
    render() {
      
      const errors = this.state.errors;
        var path="";
        if(this.state.loading){
            path=<Spinner/>
        }else{
            path=this.state.path.map((path,key)=>{
              
                return  <div className="col-md-6" key={key}>
                 <div className="site-block-half d-lg-flex">
                <div className="image" style={{backgroundImage:"url('"+path.urls.small+"')"}}></div>
                <div className="text">
                  <h3><b>UserName:</b> {path.user.username}</h3>
                  <br/>
                  <br/>
                
                  <button type="submit" onClick={()=>this.submitHandler(path.urls.small)}
                className={classnames('btn btn-success py-2 px-4 text-white', {
                  'is-invalid': errors.error
              })}
                >
                Save
                </button>
                {/* {errors.error && (
                                        <div className="invalid-feedback">{errors.error}</div>
                                    )} */}
                  {/* <input  value="Save" onClick={()=>this.submitHandler(path.urls.small)} class="btn btn-success py-2 px-4 text-white"/> */}
                  
                </div>
              </div>
              </div>
               
            })
        }
        
        return (
            <div>
                <div className="site-blocks-cover overlay inner-page-cover"style={{backgroundImage:"url('images/hero_bg_1.jpg')"}} data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7 text-center" data-aos="fade-up">
            <h1>I'm Mridul Parakh developer from Quillhash </h1>
          </div>
        </div>
      </div>
    </div>

    <div className="site-block-profile-pic" data-aos="fade" data-aos-delay="200">
      <a href="about.html"><img src="images/person_7.jpg" alt="Images"/></a>
    </div>

    <div className="site-section" data-aos="fade">
      <div className="container">
        <div className="row mb-5">
            <div className="col-12 ">
              <h2 className="site-section-heading text-center">My Specialties</h2>
            </div>
          </div>
       
        <div className="row">
          
            {path}
            
        </div>
      </div>
    </div>
            </div>
        )
    }
}
Dashboard.propTypes={
  imageStore:propTypes.func.isRequired,
  error:propTypes.object.isRequired
}
const mapStateToProps=(state)=>({
  error:state.error
});

export default connect(mapStateToProps,{imageStore})(withRouter(Dashboard));