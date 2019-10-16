const express=require('express');
const router=express.Router();
const Image=require('../../models/image');
const passport=require('passport');
const mongoose=require('mongoose');


router.post('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
  
    const imagepath={};
    imagepath.user=req.user.id;
    imagepath.path=req.body.path;
    Image.findOne({path:req.body.path})
    .then(path=>{
        if(path){
            
            res.status(400).json({error:"image already saved!"});
        }
        else{
            
            new Image(imagepath).save();
        }
    })
    
})

router.get('/showimage',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Image.find({user:req.user.id})
    .then(image=>{
        res.json(image);
    })
});


router.post('/deleteimage',passport.authenticate('jwt',{session:false}),(req,res)=>{
    
    Image.find({user:req.user.id})
    .then(path=>{
        if(path){
            Image.findOne({path:req.body.path})
            .then(image=>{
                if(image){
                    image.remove()
                    .then(data=>res.json(data))
    
                }
                else{
                    return res.status(400).json({error:"Image not found"});
                }
            })
        }
        else{
            return res.status(404).json({error:"User Not Found"});
        }
       
    })
})

module.exports=router;