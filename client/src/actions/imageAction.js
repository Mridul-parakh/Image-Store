import axios from 'axios';
import {GET_ERROR} from './types'

export const imageStore=(path)=>dispatch=>{
   
    axios.post('/api/image',path)
    .then(res=>console.log(res))
    .catch(err => dispatch({
        type:GET_ERROR,
        payload:err.response.data
    }))

}

 export const imageDelete=(path,history)=>dispatch=>{
     
     
     axios.post('/api/image/deleteimage',path)
     .then(res=>history.push('/selected'))
     .catch(err => dispatch({
        type:GET_ERROR,
        payload:err.response.data
    }));
 }