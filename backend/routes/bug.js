const express = require('express');
const router = express.Router();
const authenticateToken = require('../functions/authenticate');
const { UserM } = require('../models/User');
const { BugsM }= require('../models/Bugs');
const BugsTeam = require('../models/BugsTeam');

router.post('/add', authenticateToken, async (req, res) => {
    const user = await UserM.findById(JSON.parse(req.user));
    const team = await BugsTeam.findOne({team_id: user.teamid})
    const newBug = new BugsM({
        bug_title: req.body.bugTitle,
        bug_details: req.body.bugDesc,
        bug_created_by: user,
        last_modified_by: user,
        priority: req.body.priority,
        status: req.body.bugStatus
    })

   await newBug.save();
   team.bugs.push(newBug);
   
   await team.save();
   res.send(team.bugs);
})

router.post('/delete/:id', authenticateToken, async (req, res) => {
    const user = await UserM.findById(JSON.parse(req.user));
    const team = await BugsTeam.findOne({team_id: user.teamid})
    const bug = await BugsM.findByIdAndDelete(req.params.id)
    team.bugs.pull(bug);
    await team.save();
    res.send(`Bug: ${bug.bug_title} removed`);
})

module.exports = router;