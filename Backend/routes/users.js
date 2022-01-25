const express = require('express');
const res = require('express/lib/response');
const Router = express.Router()
let Users = require('../models/user.model')
//User.find()
Router.get('/',(req,res)=>{
    //res.send("User List")
    Users.find()
    .then((user)=> res.json(user))
    .catch(err =>res.status(400).json('Error :'+err))
});

Router.post('/add',(req,res)=>{
    const username = req.body.username
    const newUser = new Users({username})

    newUser.save()
    .then(()=>{ res.json('user added')})
    .catch(err => {res.status(400).json("Error :"+err)})
})

Router.get('/:id',(req,res)=>{
    Users.findById(req.params.id)
    .then(user =>{
        res.json(user)})
    .catch(err =>{res.status(400).json("Error"+err)})
    
})

Router.delete('/:id',(req,res)=>{
   Users.findByIdAndDelete(req.params.id)
   .then(()=>{res.json("User removed")})
   .catch(err=>{res.status(400).json("Error in delete"+err)})
})

Router.post('/update/:id',(req,res)=>{
    Users.findById(req.params.id)
    .then(user =>{
        user.username = req.body.username

        user.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err =>{res.status(400).json("Error in updating"+err)})
})

module.exports = Router;