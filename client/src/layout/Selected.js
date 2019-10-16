import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../Spinner/spinner';
import {imageDelete} from '../actions/imageAction';
import axios from 'axios';

class Selected extends Component {
    constructor(props){
        super(props);
        this.state={
            path:[],
            loading:true,
            errors:{}
        }
    }
    componentDidMount(){
        axios.get('/api/image/showimage')
        .then(data=>{
            const datas=data.data.map(data=>{
                return data.path;
            })
            this.setState({path:datas,loading:false});
            
        })
    }
    submitHandler(path) {
  
       

        const newImage={};
        newImage.path=path;
            this.props.imageDelete(newImage,this.props.history);
          
         
        }

        componentWillReceiveProps(nextProps){
      
            if(nextProps.error){
              alert(nextProps.error.error);
                
            }
        }
    render() {
      
        var path="";
        if(this.state.loading){
            path=<Spinner/>
        }else{
            path=this.state.path.map((path,key)=>{
              
                return  <div className="col-md-6" key={key}>
                 <div className="site-block-half d-lg-flex">
                <div className="image" style={{backgroundImage:"url('"+path+"')"}}></div>
                <div className="text">
                  
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                 <a href="/selected">
                 <button type="submit" onClick={()=>this.submitHandler(path)}
                className="btn btn-danger py-2 px-4 text-white"
                >
                Delete
                </button>
                     </a> 
               
                  
                </div>
              </div>
              </div>
               
            })
        }
        return (
            <div>
                    <div className="site-blocks-cover overlay inner-page-cover" style={{backgroundImage:"url('images/hero_bg_1.jpg')"}}  data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7 text-center" data-aos="fade-up">
            <h1>My Favourite</h1>
          </div>
        </div>
      </div>
    </div>

  

    <div className="site-section" data-aos="fade">
      <div className="container">
        <div className="row mb-5">
            <div className="col-12 ">
              <h2 className="site-section-heading text-center">My Favourite</h2>
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

Selected.propTypes={
    imageDelete:propTypes.func.isRequired,
   
  }
  const mapStateToProps=(state)=>({
   
  });
  
  export default connect(mapStateToProps,{imageDelete})(withRouter(Selected));

