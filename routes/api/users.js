const express=require('express');
const router=express.Router();
const User=require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');
const keys=require('../../config/keys');
const passport=require('passport');
const validateRegisterInput=require('../../validation/register');
const validateLoginInput=require('../../validation/login');

router.get('/test',(req,res)=>{
    res.send('user');
});

router.post('/register',(req,res)=>{
    const {error,isValid}=validateRegisterInput(req.body);
    if(!isValid){
        return res.status(400).json(error);
    }

    User.findOne({email:req.body.email})
    .then(user=>{
        if(user){
          return  res.status(400).json({email:"that email is already exists"});
        } 
        else{
           
            const newUser=new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            });
            bcrypt.genSalt(10, (err, salt)=> {
                bcrypt.hash(req.body.password, salt,(err, hash)=> {
                    if(err) throw err;
                    newUser.password=hash;
                    newUser.save()
                    .then(user=>res.json(user))
                    .catch(err=>console.log(err));
                });
            });       
        }
    });
});

router.post('/login',(req,res)=>{
    const {error,isValid}=validateLoginInput(req.body);
    if(!isValid){
        return res.status(400).json(error);
    }

    const email=req.body.email;
    const password=req.body.password;
    User.findOne({email})
    .then(user=>{
        if(!user){
            return res.status(404).json({email:"email not exists"});
        }
        bcrypt.compare(password,user.password)
        .then(isMatch=>{
            if(isMatch){
                
                // res.json({msg:"success"});
                const payload={id:user.id,name:user.name,avatar:user.avatar};
                jwt.sign(payload,keys.secretOrKey,{expiresIn:360000},
                    (err,token)=>{
                        res.json({
                            success:true,
                            token:'bearer '+token
                        })
                })
            }
            else{
                error.password = 'Password incorrect';
               return res.status(400).json(error);
            }
            
        })
    })
});



router.get("/current", passport.authenticate('jwt', { session: false }),(req, res)=>{
    res.json({
        id:req.user.id,
        name:req.user.name,
        email:req.user.email
    });
    
  });


module.exports=router;