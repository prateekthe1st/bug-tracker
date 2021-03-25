const express = require('express');
const router = express.Router();
const authenticateToken = require('../functions/authenticate');
const teamModel = require('../models/Teams');
const { UserM } = require ('../models/User');
const BugsTeams = require('../models/BugsTeam');
const { request } = require('express');

router.post('/join/results', authenticateToken, async (req, res) => {
    const team = await teamModel.findOne({joinCode: req.body.joinCode});
    if (team !== null){
        res.json({
            code: 900,
            teamName: team.teamName,
            createdBy: team.createdBy.username,
            uniqueCode: team.joinCode,
            amtMembers: team.teamMembers.length
        })
    } else {
        res.json({
            code: 901
        })
    }
})

router.post('/join', authenticateToken, async (req, res) => {
    const user = await UserM.findById(JSON.parse(req.user));
    const team = await teamModel.findOne({joinCode: req.body.joinCode})

    user.teamid = req.body.joinCode;
    await user.save();

    team.teamMembers.push(user);
    await team.save();
    res.json({
        code: 905,
        team: team.teamName
    })

})

router.post('/create', authenticateToken, async (req, res) => {
    const user = await UserM.findById(JSON.parse(req.user));
    const team = new teamModel({
        teamName: req.body.teamName,
        createdBy: user,
        joinCode: genRandom()
    }) 
    const bugTeam = new BugsTeams({
        team_id: team.joinCode,
        team_name: req.body.teamName
    })

    if(bugTeam.bugs === null){
        console.log("you know the vibeszzz");
    }
    

    await bugTeam.save();

    user.teamid = team.joinCode;
    await user.save();

    team.save()
        .then(async (data) => {
            try{
                res.json({
                    code: 910
                });
            } catch (err) {
                res.json({
                    code: 915
                })
            }
        })

    function genRandom() {
        let uniqueCode = '';
        for (i = 0; i < 6; i++){
            let rand = Math.floor(Math.random() * 36);
            if (rand < 10){
                uniqueCode = uniqueCode + String.fromCharCode(rand + 48);
            }else{
                uniqueCode = uniqueCode + String.fromCharCode(rand + 55);
            }
        }
        
        return uniqueCode;
    }

})

//People will only be able to access disband functions if they own a team
router.post('/disband', authenticateToken, async (req, res) => {
    const user = await UserM.findById(JSON.parse(req.user));
    const exteam = await teamModel.findOneAndDelete({joinCode: user.teamid});
    const exBugTeam = await BugsTeams.findOneAndDelete({team_id: user.teamid});

    user.teamid = null;
    await user.save();

    res.send(`You have successfully disbanded team ${exteam.teamName}`);   

})

router.post('/leave', authenticateToken, async (req, res) => {
    const user = await UserM.findById(JSON.parse(req.user));
    const team = await teamModel.findOne({teamMembers: user});
    team.teamMembers.pull(user);
    await team.save();

    user.teamid = null;
    await user.save();
    
    res.send(`Successfully left Team: ${team.teamName}`);
})



module.exports = router;