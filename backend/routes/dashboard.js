const express = require('express');
const router = express.Router();
const { UserM } = require('../models/User');
const teamModel = require('../models/Teams');
const teamBugs = require('../models/BugsTeam');
const authenticateToken = require('../functions/authenticate');

router.get('/', authenticateToken, async (req, res) => {
    const user = await UserM.findById(JSON.parse(req.user));
    if (user.teamid == null){
        res.json({
            code: 802
        })
    }else{
        res.json({
            code: 801,
            team: user.teamid
        })
    }
})

router.get('/tracker', authenticateToken, async (req, res) => {
    const user = await UserM.findById(JSON.parse(req.user));
    const team = await teamBugs.findOne({team_id: user.teamid});

    if (team === null){
        user.teamid = '';
        res.json({
            code: 1004
        })
    }

    res.json({
        code: 1001,
        bugs: team.bugs
    })
})

const addRoute = require('./edit');
router.use('/edit', addRoute);

//const removeRoute = require('./remove');
//router.use('/remove', removeRoute);

module.exports = router;