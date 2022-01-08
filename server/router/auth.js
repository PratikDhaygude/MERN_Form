const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { findOne } = require('../model/schema');

require('../db/connection');
const User = require('../model/schema');
const authenticate = require('../middleware/authentication')

router.get('/',(req,res)=>{
    res.send(`Hello World from Home!`);
})

router.get('/project', (req,res)=>{
    res.send(`Hello World from Project!`);
})

router.post('/project', async(req,res) => {
    try {
        let token;

        const { title } = req.body;

        if(!title){
            return res.status(400).json({error: "Please enter title"});
        }

        const userLogin = await User.findOne({title: title});

        token = await userLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true
        });
        
    } catch (error) {
        
    }
})

//! promise method
/*
router.post('/registered', (req,res)=>{

    const { title, objectives, scope, plan, deliverables, incentives, conditions } = req.body;

    if(!title || !objectives || !scope || !plan|| !deliverables|| !incentives || !conditions){
        return res.status(422).json({error: "Please fill all inputs"});
    }

    User.findOne({title: title})
    .then((titleExists) => {
        if(titleExists){
            return res.status(422).json({error: "Title already exists!"});
        }

        const user = new User({title, objectives, scope, plan, deliverables, incentives, conditions});

        user.save().then(() => {
            res.status(201).json({message: "Data added succesfully!"});
        }).catch((err)=> res.status(500).json({ error: "Failed to register!"}));
    }).catch(err => {console.log(err)});

    console.log(req.body.title);

    // res.json({message: req.body});
    // res.send("Auth.js output!");

})
*/

router.get('/administrator', authenticate,  (req,res)=>{
    res.send("Hello, This is administrator Page!");
    res.send(req.rootUser);
})

//! async-await method

router.post('/administrator', async (req,res)=>{

    const { title, objectives, scope, plan, deliverables, incentives, conditions } = req.body;

    if(!title || !objectives || !scope || !plan|| !deliverables|| !incentives || !conditions){
        return res.status(422).json({error: "Please fill all inputs"});
    }

    try {
        const titleExists = await User.findOne({title: title});

        if(titleExists){
            return res.status(422).json({error: "Title already exists!"});
        }
        
        const user = new User({title, objectives, scope, plan, deliverables, incentives, conditions});

        const userRegister = await user.save();

        if (userRegister) {
            res.status(201).json({message: "Data added succesfully!"});
        } else {
            res.status(500).json({ error: "Failed to register!"})
        }
    } catch (error) {
        console.log(error)
    }

    console.log(req.body.title);

    // res.json({message: req.body});
    // res.send("Auth.js output!");

})

router.get('/temp', (req,res) => {
    res.send(`Hello from temporary page!`);
})


module.exports = router;
