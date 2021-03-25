const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { UserM } = require('../models/User');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    doc = await UserM.findOne({username: req.body.username})
    if (doc == null){
        res.json({
            code: 303
        })
    }else{
        if (await bcrypt.compare(req.body.password, doc.hashedPassword)){
            let token = jwt.sign(JSON.stringify(doc._id), process.env.TOKEN_SECRET);
            doc.token = token;
            await doc.save();
            res.json({
                code: 301,
                token: token
            });
        }else{
            res.json({
                code: 302
            });
        }
    } 
    
    
})

//code for updating a user's team
/* let doc = await UserM.findOne({
        username: req.body.username
    })
    doc.teamid = "team12";
    try{
        await doc.save();
        res.send("Doc updated");
    }catch(err){
        res.send(err.message);
    } */

router.post('/signup', async (req,res) => {
    if (await UserM.findOne({username: req.body.username}) !== null){
        res.json({
            code: 701
        })
    }
    const user = new UserM({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        hashedPassword: await bcrypt.hash(req.body.password, 10)
    });

    user.save()
        .then(async (data) => {
            try{
                res.json({
                    code: 700
                });
            }catch(err){
                res.json(500);
            }
        }); 
})

module.exports = router;